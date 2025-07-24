import { Id } from "@/convex/_generated/dataModel";

interface ConversationProps {
  id: Id<"conversations">;
}
export const Conversation = ({ id }: ConversationProps) => { 
  const { data: conversation } = useQuery({
    queryKey: ["conversation", id],
    queryFn: async () => {
      const { data } = await api.getById(id);
      return data;
    },
  });
  
export const Conversation = ({ id }: ConversationProps) => {
  return (
  <div></div>
);
};