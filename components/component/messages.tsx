import { useState, useEffect } from 'react';
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu";
import Cookies from 'js-cookie';
import MessageUI from './MessageUI';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

export default function MessagesDos() {

  interface User {
    id: number;
    name: string;
    avatar?: string;
  }

  interface Message {
    id: number;
    sender_id: number;
    receiver_id: number;
    content: string;
    created_at: string;
  }

  interface Conversation {
    id: number;
    name: string;
    avatar?: string;
    last_message: Message;
  }

  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const response = await fetch(`${process.env.LARAVEL}/api/conversations`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Cookies.get('auth_token')}`
          },
          credentials: 'include',
        });
        if (!response.ok) {
          throw new Error('Failed to fetch conversations');
        }
        const data: Conversation[] = await response.json();  // Usa el tipo Conversation
        setConversations(data);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
        setLoading(false);
      }
    };

    fetchConversations();
  }, []);

  const handleSelectUser = (user: User) => {
    setSelectedUser(user);
  };

  const handleCloseMessageUI = () => {
    setSelectedUser(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto py-6 px-4 md:px-6">
      {selectedUser ? (
        <MessageUI selectedUser={selectedUser} onClose={handleCloseMessageUI} />
      ) : (
        <>
          <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
            <div className="flex items-center gap-4 px-4 py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="relative flex-1">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
                <Input
                  className="pl-10 pr-4 py-2 rounded-md w-full bg-white dark:bg-gray-950 focus:outline-none focus:ring-1 focus:ring-gray-950 dark:focus:ring-gray-300"
                  placeholder="Search messages..."
                  type="search"
                />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="rounded-full" size="icon" variant="ghost">
                    <FilterAltIcon className="w-5 h-5" />
                    <span className="sr-only">Filter messages</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value="recent">
                    <DropdownMenuRadioItem value="recent">Recent</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="unread">Unread</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="oldest">Oldest</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="h-[calc(100vh_-_theme(spacing.24)_-_theme(spacing.6))] overflow-y-auto">
              <div className="grid gap-4 p-4">
                {conversations.map((conversation) => (
                  <div
                    className="flex items-start gap-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                    key={conversation.id}
                    onClick={() => handleSelectUser({ id: conversation.id, name: conversation.name, avatar: conversation.avatar })}
                  >
                    <Avatar className="w-12 h-12">
                      <AvatarImage alt={`@${conversation.name}`} src={conversation.avatar || "/placeholder-user.jpg"} />
                      <AvatarFallback>{conversation.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 grid gap-1">
                      <div className="flex items-center justify-between">
                        <div className="font-medium">{conversation.name}</div>
                        {conversation.last_message && (
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {new Date(conversation.last_message.created_at).toLocaleTimeString()}
                          </div>
                        )}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                        {conversation.last_message ? conversation.last_message.content : 'No messages yet'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
