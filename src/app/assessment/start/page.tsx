"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import { company } from "@/data/site";

type FormState = {
  sentiment: string;
  reason: string;
  itemType: string;
  brand: string;
  quantity: string;
  usagePeriod: string;
  condition: string;
  accessories: string;
  timing: string;
  feeling: string;
  email: string;
};

const itemTypes = ["ブランドバッグ", "腕時計", "ジュエリー", "金・貴金属", "アパレル", "その他"] as const;
const brands = ["ルイ・ヴィトン", "シャネル", "エルメス", "ロレックス", "オメガ", "グッチ", "プラダ", "その他"] as const;
const sentiments = [
  "思い出があって丁寧に扱ってほしい",
  "家族・身内からの大切な預かり物",
  "整理しながら手放し方を考えたい",
  "価値をきちんと見てもらえれば安心",
  "まだ迷っているので相談しながら進めたい"
] as const;
const reasonOptions = [
  "引越し・お部屋整理のため",
  "遺品整理・生前整理のため",
  "使う機会が減ったため",
  "買い替え資金に充てたい",
  "家族に頼まれて相談している"
] as const;
const quantities = ["1点", "2〜3点", "4〜9点", "10点以上"] as const;
const usagePeriods = ["未使用に近い", "1年以内", "1〜3年", "3年以上", "不明"] as const;
const conditions = ["とても良い", "やや使用感あり", "キズ・汚れあり", "動作不良あり", "わからない"] as const;
const accessoryOptions = ["箱あり", "保証書あり", "付属品なし", "一部あり", "わからない"] as const;
const timings = ["今すぐ売りたい", "1週間以内", "1か月以内", "相場を見て検討", "まだ迷っている"] as const;

const totalSteps = 11;
const finalStep = totalSteps + 1;
const stepLabels = ["想い", "きっかけ", "品目", "ブランド", "点数", "使用期間", "状態", "付属品", "売却時期", "写真", "査定結果"] as const;

function createAssessmentId() {
  const now = new Date();
  const y = now.getFullYear().toString().slice(-2);
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  const random = Math.floor(1000 + Math.random() * 9000);
  return `FC-${y}${m}${d}-${random}`;
}

export default function AssessmentOnboardingPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>({
    sentiment: "",
    reason: "",
    itemType: "",
    brand: "",
    quantity: "",
    usagePeriod: "",
    condition: "",
    accessories: "",
    timing: "",
    feeling: "",
    email: ""
  });
  const [photos, setPhotos] = useState<File[]>([]);
  const [assessmentId, setAssessmentId] = useState("");
  const [deliveryMethod, setDeliveryMethod] = useState<"line" | "email" | "">("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const currentProgressStep = Math.min(step, totalSteps);
  const progressBetweenDots = totalSteps > 1 ? (currentProgressStep - 1) / (totalSteps - 1) : 0;
  const canSubmitEmail = form.email.trim().length > 0 && form.email.includes("@");

  const lineMessage = useMemo(() => {
    if (!assessmentId) return "";
    return `査定番号: ${assessmentId}\n背景: ${form.sentiment}\nきっかけ: ${form.reason}\n品目: ${form.itemType}\nブランド: ${form.brand}\n状態: ${form.condition}`;
  }, [assessmentId, form.sentiment, form.reason, form.itemType, form.brand, form.condition]);

  const lineUrl = useMemo(() => {
    if (!lineMessage) return company.lineUrl;
    return `${company.lineUrl}?text=${encodeURIComponent(lineMessage)}`;
  }, [lineMessage]);

  const gotoStep = (nextStep: number) => setStep(nextStep);

  const ensureAssessmentId = () => {
    if (assessmentId) return assessmentId;
    const id = createAssessmentId();
    setAssessmentId(id);
    return id;
  };

  const selectAndNext = (field: keyof FormState, value: string) => {
    setForm((v) => ({ ...v, [field]: value }));
    gotoStep(Math.min(step + 1, totalSteps));
  };

  const chooseLineDelivery = () => {
    ensureAssessmentId();
    setDeliveryMethod("line");
    setEmailSubmitted(false);
    gotoStep(finalStep);
  };

  const submitEmailDelivery = () => {
    if (!canSubmitEmail) return;
    ensureAssessmentId();
    setDeliveryMethod("email");
    setEmailSubmitted(true);
    gotoStep(finalStep);
  };

  useEffect(() => {
    if (step >= 10 && !assessmentId) {
      ensureAssessmentId();
    }
  }, [step, assessmentId]);

  const updatePhotoAt = (index: number, file: File | null) => {
    setPhotos((prev) => {
      const next = [...prev];
      if (file) next[index] = file;
      else next.splice(index, 1);
      return next.slice(0, 3);
    });
  };

  const back = () => {
    if (step === 1) return;
    if (step === finalStep) {
      gotoStep(totalSteps);
      return;
    }
    gotoStep(step - 1);
  };

  const renderChoiceStep = (title: string, field: keyof FormState, options: readonly string[]) => (
    <>
      <h2 className="font-bold text-navy">{title}</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => selectAndNext(field, option)}
            className={`rounded-lg border px-4 py-3 text-left font-bold transition ${
              form[field] === option ? "border-gold bg-gold-soft/35 text-navy" : "border-ink/15 text-ink/70 hover:border-gold"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );

  return (
    <section className="bg-linen py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <p className="text-sm font-bold tracking-[0.08em] text-gold">ASSESSMENT</p>
        <h1 className="mt-3 font-serif text-3xl font-bold leading-tight text-navy sm:text-4xl">今すぐ査定</h1>
        <p className="mt-4 leading-8 text-ink/72">
          じっくり確認したい方向けに、11ステップで丁寧にヒアリングします。査定番号は自動発行されます。
        </p>

        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between text-xs font-bold text-ink/60">
            <span>進行状況</span>
            <span>{currentProgressStep} / {totalSteps}</span>
          </div>

          <div className="relative mt-4 overflow-x-auto pb-2">
            <div className="relative min-w-[44rem] px-4">
              <div className="absolute left-4 right-4 top-4 h-[3px] rounded-full bg-gold-soft/70" />
              <div
                className="absolute left-4 top-4 h-[3px] rounded-full bg-gold transition-all duration-300"
                style={{ width: `calc((100% - 2rem) * ${progressBetweenDots})` }}
              />
              <div className="relative flex items-start justify-between">
                {stepLabels.map((label, index) => {
                  const idx = index + 1;
                  const done = currentProgressStep > idx;
                  const current = currentProgressStep === idx;
                  return (
                    <div key={label} className="w-16 text-center">
                      <div
                        className={`mx-auto flex size-8 items-center justify-center rounded-full border text-xs font-bold shadow-sm transition ${
                          done
                            ? "border-gold bg-gold text-white"
                            : current
                              ? "border-gold bg-gold-soft text-navy"
                              : "border-ink/20 bg-white text-ink/45"
                        }`}
                      >
                        {done ? <Check size={14} /> : idx}
                      </div>
                      <p className={`mt-1 text-[11px] font-bold ${current ? "text-navy" : "text-ink/50"}`}>{label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <p className="mt-3 text-xs text-ink/55">
            最終完了条件:
            {step < totalSteps
              ? " 査定結果ステップで、LINE送信 または メール受取を選択"
              : deliveryMethod === "line"
                ? " LINEで査定番号を送信して完了"
                : deliveryMethod === "email"
                  ? " メールアドレス登録で完了"
                  : " 受け取り方法を選択して完了"}
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-ink/10 bg-white p-6 shadow-soft sm:p-8">
          {step === 1 ? renderChoiceStep("1. お品物への想いに近いものを選んでください", "sentiment", sentiments) : null}
          {step === 2 ? renderChoiceStep("2. どういう経緯で売る流れになりましたか？", "reason", reasonOptions) : null}
          {step === 3 ? renderChoiceStep("3. どんな品物を売りたいですか？（タップで次へ）", "itemType", itemTypes) : null}
          {step === 4 ? renderChoiceStep("4. ブランドを教えてください（タップで次へ）", "brand", brands) : null}
          {step === 5 ? renderChoiceStep("5. 何点くらいありますか？", "quantity", quantities) : null}
          {step === 6 ? renderChoiceStep("6. 使用期間はどれくらいですか？", "usagePeriod", usagePeriods) : null}
          {step === 7 ? renderChoiceStep("7. 品物の状態に近いものを選んでください", "condition", conditions) : null}
          {step === 8 ? renderChoiceStep("8. 付属品の状況を教えてください", "accessories", accessoryOptions) : null}
          {step === 9 ? renderChoiceStep("9. いつ頃売りたいですか？", "timing", timings) : null}

          {step === 10 ? (
            <>
              <h2 className="font-bold text-navy">10. 写真を追加してください（最大3枚）</h2>
              <p className="mt-2 text-sm text-ink/60">写真がなくてもOK。あとからLINEで送ることもできます。</p>
              <div className="mt-4 space-y-4">
                {[0, 1, 2].map((slot) => (
                  <div key={slot} className="rounded-xl border border-ink/12 bg-fog p-4">
                    <p className="text-sm font-bold text-navy">写真 {slot + 1}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <label className="inline-flex cursor-pointer items-center rounded-md border border-ink/15 bg-white px-3 py-2 text-xs font-bold text-navy">
                        ファイルを選択
                        <input type="file" accept="image/*" className="hidden" onChange={(e) => updatePhotoAt(slot, e.target.files?.[0] ?? null)} />
                      </label>
                      <label className="inline-flex cursor-pointer items-center rounded-md bg-navy px-3 py-2 text-xs font-bold text-white">
                        カメラを起動
                        <input
                          type="file"
                          accept="image/*"
                          capture="environment"
                          className="hidden"
                          onChange={(e) => updatePhotoAt(slot, e.target.files?.[0] ?? null)}
                        />
                      </label>
                    </div>
                    {photos[slot] ? (
                      <p className="mt-2 rounded-md bg-white px-3 py-2 text-xs text-ink/70">{photos[slot].name}</p>
                    ) : (
                      <p className="mt-2 text-xs text-ink/45">未選択</p>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-5 flex justify-end">
                <button
                  type="button"
                  onClick={() => gotoStep(11)}
                  className="inline-flex min-h-11 items-center gap-1 rounded-md bg-navy px-5 text-sm font-bold text-white"
                >
                  次へ <ChevronRight size={16} />
                </button>
              </div>
            </>
          ) : null}

          {step === 11 ? (
            <>
              <h2 className="font-bold text-navy">11. 査定結果の受け取り方法</h2>
              <p className="mt-2 text-sm leading-7 text-ink/60">
                ここまで入力ありがとうございます。査定番号を発行しました。この番号をもとに、査定結果をLINEまたはメールでお届けします。
              </p>
              <div className="mt-5 rounded-xl border border-gold bg-gold-soft/35 px-5 py-4">
                <p className="text-xs font-bold text-ink/55">査定番号（自動発行）</p>
                <p className="mt-1 font-serif text-3xl font-bold text-navy">{assessmentId}</p>
              </div>

              <div className="mt-5 space-y-3">
                <button
                  type="button"
                  onClick={chooseLineDelivery}
                  className="w-full rounded-lg border border-[#06c755]/50 bg-[#e9fff1] px-4 py-3 text-left text-sm font-bold text-[#075e2b] transition hover:bg-[#d7f8e3]"
                >
                  LINEで受け取る（査定番号を送信）
                </button>
                <p className="rounded-md bg-fog px-3 py-2 text-xs text-ink/65">
                  LINEで受け取る場合は、このあと表示される案内どおり「査定番号」をLINEで送信いただくと、査定を開始できます。
                </p>
                <div className="rounded-lg border border-ink/15 bg-fog px-4 py-3">
                  <p className="text-sm font-bold text-navy">メールで受け取る</p>
                  <input
                    value={form.email}
                    onChange={(e) => setForm((v) => ({ ...v, email: e.target.value }))}
                    className="mt-2 w-full rounded-md border border-ink/15 bg-white px-3 py-2 text-sm outline-none focus:border-gold"
                    placeholder="メールアドレス"
                  />
                  <button
                    type="button"
                    onClick={submitEmailDelivery}
                    disabled={!canSubmitEmail}
                    className="mt-3 inline-flex min-h-10 items-center rounded-md bg-navy px-4 text-xs font-bold text-white disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    メールで受け取る
                  </button>
                </div>
              </div>
            </>
          ) : null}

          {step === finalStep ? (
            <>
              <p className="inline-flex rounded-full border border-gold-soft bg-gold-soft/35 px-3 py-1 text-xs font-bold text-navy">入力完了</p>
              <h2 className="mt-3 font-serif text-2xl font-bold text-navy">査定受付が完了しました</h2>
              <p className="mt-4 text-ink/72">
                {deliveryMethod === "line"
                  ? "この査定番号をLINEで送ってください。番号送信が完了すると査定を開始できます。"
                  : "査定番号と入力情報を受け付けました。メールで結果をお送りします。"}
              </p>
              <div className="mt-5 rounded-xl border border-gold bg-gold-soft/35 px-5 py-4">
                <p className="text-xs font-bold text-ink/55">査定番号</p>
                <p className="mt-1 font-serif text-3xl font-bold text-navy">{assessmentId}</p>
              </div>
              {deliveryMethod === "line" ? (
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link href={lineUrl} className="inline-flex min-h-10 items-center justify-center rounded-md bg-[#06c755] px-4 py-2 text-sm font-bold text-white">
                    LINEで査定番号を送る
                  </Link>
                  <button
                    type="button"
                    onClick={() => navigator.clipboard?.writeText(assessmentId)}
                    className="inline-flex min-h-10 items-center justify-center rounded-md border border-ink/20 bg-white px-4 py-2 text-sm font-bold text-navy"
                  >
                    査定番号をコピー
                  </button>
                </div>
              ) : (
                <div className="mt-6 rounded-lg border border-ink/10 bg-fog px-4 py-3 text-sm text-ink/70">
                  受け取り先メール: {form.email}
                  {emailSubmitted ? "（登録済み）" : ""}
                </div>
              )}
            </>
          ) : null}

          <div className="mt-8 flex justify-start">
            <button
              type="button"
              onClick={back}
              disabled={step === 1}
              className="inline-flex min-h-10 items-center justify-center rounded-md border border-ink/20 bg-white px-4 text-sm font-bold text-navy disabled:cursor-not-allowed disabled:opacity-40"
            >
              戻る
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
