import {
  Bot,
  Check,
  CheckCheck,
  CircleCheck,
  MessageCircle,
  MoreVertical,
  Paperclip,
  Phone,
  Smile,
  Video,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";

export type ChatMessage = { side: "left" | "right"; text: string; time: string };

function WhatsAppHeader({ status = "en ligne" }: { status?: string }) {
  return (
    <div className="chat-topbar">
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white/15 text-white">
        <Bot className="size-5" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold">Brayano IA</p>
        <p className="text-xs text-white/75">{status}</p>
      </div>
      <div className="flex items-center gap-4 text-white/90" aria-hidden="true">
        <Video className="size-[18px]" />
        <Phone className="size-[18px]" />
        <MoreVertical className="size-[18px]" />
      </div>
    </div>
  );
}

function WhatsAppComposer({ flush = false }: { flush?: boolean }) {
  return (
    <div className={`chat-composer ${flush ? "chat-composer-flush" : ""}`} aria-hidden="true">
      <Smile className="size-5 shrink-0 text-muted-foreground" />
      <span className="chat-composer-input">Écrivez un message</span>
      <Paperclip className="size-5 shrink-0 text-muted-foreground" />
      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-whatsapp text-white">
        <MessageCircle className="size-4" />
      </span>
    </div>
  );
}

function Bubble({
  side,
  children,
  time,
}: {
  side: "left" | "right";
  children: ReactNode;
  time: string;
}) {
  return (
    <div className={`message-bubble ${side === "right" ? "message-agent" : "message-user"}`}>
      {children}
      <span className="message-meta">
        {time}
        {side === "right" && <CheckCheck className="size-3.5" aria-label="Message lu" />}
      </span>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="typing-bubble" role="status" aria-label="Brayano IA écrit une réponse">
      <span />
      <span />
      <span />
    </div>
  );
}

export function ConversationVisual({
  messages,
  qualifiers,
}: {
  messages: readonly ChatMessage[];
  qualifiers: readonly string[];
}) {
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setVisibleCount(messages.length);
      return;
    }

    const delay = visibleCount >= messages.length ? 5200 : 4000;
    const timer = window.setTimeout(() => {
      setVisibleCount((current) => (current >= messages.length ? 1 : current + 1));
    }, delay);
    return () => window.clearTimeout(timer);
  }, [visibleCount, messages.length]);

  const nextMessage = messages[visibleCount];
  const isTyping = nextMessage?.side === "right";

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="conversation-window">
        <WhatsAppHeader status={isTyping ? "écrit…" : "en ligne"} />
        <div
          className="chat-wallpaper min-h-[22rem] space-y-3 p-4 sm:p-6"
          aria-label="Exemple de conversation entre un prospect et Brayano IA"
        >
          <p className="chat-day-label">Aujourd’hui</p>
          {messages.slice(0, visibleCount).map((message, index) => (
            <Bubble key={index} side={message.side} time={message.time}>
              {message.text}
            </Bubble>
          ))}
          {isTyping && <TypingIndicator />}
        </div>
        <WhatsAppComposer />
        <div className="grid grid-cols-2 gap-px border-t border-border bg-border sm:grid-cols-4">
          {qualifiers.map((item) => (
            <div key={item} className="bg-background px-3 py-4 text-center text-xs font-medium">
              <Check className="mx-auto mb-2 size-4 text-whatsapp" />
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -right-3 -bottom-6 flex items-center gap-3 rounded-lg border border-whatsapp/20 bg-background p-3 shadow-xl sm:right-6">
        <span className="grid size-9 place-items-center rounded-full bg-whatsapp-soft text-whatsapp">
          <CircleCheck />
        </span>
        <div>
          <p className="text-xs text-muted-foreground">Statut</p>
          <p className="text-sm font-semibold">Prospect qualifié</p>
        </div>
      </div>
    </div>
  );
}

export function DemoConversation({
  messages,
  fiche,
}: {
  messages: readonly ChatMessage[];
  fiche: readonly (readonly [string, string])[];
}) {
  return (
    <div className="demo-panel">
      <div className="demo-chat">
        <WhatsAppHeader />
        <div className="chat-wallpaper -mx-6 min-h-[20rem] space-y-3 px-4 py-5 sm:px-6">
          <p className="chat-day-label">Aujourd’hui</p>
          {messages.map((message, index) => (
            <Bubble key={index} side={message.side} time={message.time}>
              {message.text}
            </Bubble>
          ))}
        </div>
        <WhatsAppComposer flush />
      </div>
      <aside className="qualification-card">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Fiche automatique</p>
            <h3 className="mt-1 font-semibold">Prospect qualifié</h3>
          </div>
          <CircleCheck className="text-whatsapp" />
        </div>
        <dl className="mt-8 space-y-4">
          {fiche.map(([key, value]) => (
            <div
              key={key}
              className="flex justify-between gap-4 border-b border-border pb-3 text-sm"
            >
              <dt className="text-muted-foreground">{key}</dt>
              <dd className="text-right font-medium">{value}</dd>
            </div>
          ))}
        </dl>
      </aside>
    </div>
  );
}
