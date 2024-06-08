import { useState, useEffect } from 'react';
import { AvatarImage, AvatarFallback, Avatar } from "@/components/vercel/ui/avatar";
import { Input } from "@/components/vercel/ui/input";
import { Button } from "@/components/vercel/ui/button";
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuContent, DropdownMenu } from "@/components/vercel/ui/dropdown-menu";
import Cookies from 'js-cookie';
import MessageUI from './MessageUI';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

export default function MessagesDos() {

  interface User {
    id: number;
    name: string;
    avatar?: string;
    profile_image?: string;
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
  const [showNewConversationModal, setShowNewConversationModal] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]); // Lista de usuarios para iniciar nuevas conversaciones

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
          throw new Error(`Failed to fetch conversations: ${response.statusText}`);
        }
        const data: Conversation[] = await response.json();
        console.log('Fetched conversations:', data); // Añadir log para verificar los datos
        setConversations(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching conversations:', err);
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

  const handleNewConversation = async () => {
    try {
      const response = await fetch(`${process.env.LARAVEL}/api/users`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Cookies.get('auth_token')}`
        },
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch users: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Fetched users:', data.users); // Añadir log para verificar los datos
      setUsers(data.users);
      setShowNewConversationModal(true);
    } catch (err) {
      console.error('Error fetching users:', err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  const handleStartConversation = (user: User) => {
    setShowNewConversationModal(false);
    setSelectedUser(user);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full mx-auto py-6 px-4 md:px-6">
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
              <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleNewConversation}>
                Nuevo chat
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="rounded-full" size="icon" variant="ghost">
                    <FilterAltIcon className="w-5 h-5" />
                    <span className="sr-only">Filtrar mensajes</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuLabel>Ordenar por</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuRadioGroup value="recent">
                    <DropdownMenuRadioItem value="recent">Recientes</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="unread">No leidos</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="oldest">Antiguedad</DropdownMenuRadioItem>
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

          {showNewConversationModal && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Empieza una nueva Conversación</h2>
                <ul>
                  {Array.isArray(users) && users.length > 0 ? (
                    users.map((user) => (
                      <li
                        key={user.id}
                        className="flex items-center gap-4 p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
                        onClick={() => handleStartConversation(user)}
                      >
                        <Avatar className="w-8 h-8">
                          <AvatarImage alt={`@${user.name}`} src={user.profile_image || "/placeholder-user.jpg"} />
                          <AvatarFallback>{user.name[0]}</AvatarFallback>
                        </Avatar>
                        <span>{user.name}</span>
                      </li>
                    ))
                  ) : (
                    <li>No se han encontrado usuarios.</li>
                  )}
                </ul>
                <Button className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => setShowNewConversationModal(false)}>
                  Cancelar
                </Button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
