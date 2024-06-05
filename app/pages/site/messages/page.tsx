'use client';
import Messages from "../../../components/ui/messages/messages";
import MessagesDos from "@/components/component/messages";

export default function Mensajeria() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Tus Mensajes</h1>
      {/* <Messages /> */}
      <MessagesDos />
    </div>
  );
}