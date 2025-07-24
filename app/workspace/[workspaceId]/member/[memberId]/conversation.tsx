import { Id } from "@/convex/_generated/dataModel";

interface ConversationProps {
  id: Id<"conversations">;
}

export const Conversation = ({ id }: ConversationProps) => {
  return (
  <div>
    <div className="flex items-center gap-x-2 px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50">
      <p className="text-sm font-semibold">Conversation name</p>
      <p className="text-sm text-[#1264a3] hover:underline font-semibold">Edit</p>
      <TrashIcon className="w-4 h-4" />
    </div>
  </div>
);
};