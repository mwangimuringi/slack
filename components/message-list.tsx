import { GetMessagesReturnType } from "@/features/messages/api/use-get-messages";

interface MessageListProps {
    memberName?: string;
    memberImage?: string;
    channelName?: string;
    channelCreationTime?: number;
    variant?: "channel" | "thread" | "conversation";
    data: GetMessagesReturnType | undefined;
    loadMore: () => void;
    isLoadingMore: boolean;
    canLoadMore: boolean;
}

export const MessageList = ({
    memberName,
    memberImage,
    channelName,
    channelCreationTime,
    data,
    variant = "channel",
    loadMore,
    isLoadingMore,
    canLoadMore,
}: MessageListProps) => {
    return (
        <div className="flex flex-1 flex-col-reverse pb-4 overflow-y-auto messages-scrollbar">
            
        </div>
    )
}