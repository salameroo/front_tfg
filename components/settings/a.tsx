return (
    <div className="w-full max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-4 md:col-span-1">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 flex items-center gap-4">
                    <div className="w-16 h-16 relative rounded-full overflow-hidden">
                        <Image
                            src={profilePhoto || '/placeholder.svg'}
                            alt={username}
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="flex-1 grid gap-1">
                        <div className="text-lg font-medium">{username}</div>
                        <div className="text-gray-500 dark:text-gray-400 text-sm">{email}</div>
                    </div>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleProfilePhotoChange}
                        className="hidden"
                        id="profile-photo-upload"
                    />
                    <label htmlFor="profile-photo-upload" className="cursor-pointer inline-block px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800">
                        Editar Perfil
                    </label>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 grid grid-cols-3 gap-4">
                    <div className="flex flex-col items-center">
                        <div className="text-2xl font-bold">{posts.length}</div>
                        <div className="text-gray-500 dark:text-gray-400 text-sm">Posts</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-2xl font-bold">{user.followers_count}</div>
                        <div className="text-gray-500 dark:text-gray-400 text-sm">Seguidores</div>
                        <button
                            className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600"
                            onClick={handleShowFollowers}
                        >
                            Seguidores
                        </button>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-2xl font-bold">{user.following_count}</div>
                        <div className="text-gray-500 dark:text-gray-400 text-sm">Siguiendo</div>
                        <button
                            className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600"
                            onClick={handleShowFollowing}
                        >
                            Siguiendo
                        </button>
                    </div>
                </div>
            </div>
            <div className="space-y-6 md:col-span-2">
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
                    <div className="text-lg font-medium">Nombre de usuario</div>
                    <div className="text-sm text-gray-500">Actualiza el nombre de usuario que será mostrado en tu perfil.</div>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="mt-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <button
                        type="button"
                        className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800"
                        onClick={handleSaveChanges}
                    >
                        Save
                    </button>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <div className="text-lg font-medium">Contraseña</div>
                    <div className="text-sm text-gray-500">Actualiza tu contraseña para mantener segura tu cuenta.</div>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">Contraseña actual</label>
                            <input
                                id="current-password"
                                type="password"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">Nueva Contraseña</label>
                            <input
                                id="new-password"
                                type="password"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirmar Contraseña</label>
                            <input
                                id="confirm-password"
                                type="password"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>
                    <button
                        type="button"
                        className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800"
                        onClick={handleSaveChanges}
                    >
                        Guardar
                    </button>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <div className="text-lg font-medium">Email</div>
                    <div className="text-sm text-gray-500">Actualiza tu email para estar sincronizado.</div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-4 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                    <button
                        type="button"
                        className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-700 hover:bg-gray-800"
                        onClick={handleSaveChanges}
                    >
                        Guardar
                    </button>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <div className="text-lg font-medium">Posts</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                        {posts.map((post) => (
                            <SinglePostMalone
                                key={post.id}
                                postId={post.id}
                                isOpen={selectedPostId === post.id}
                                onClose={handlePostClose}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* Followers Modal */}
        {showFollowersModal && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg">
                    <h2 className="text-xl font-bold mb-4">Seguidores</h2>
                    <ul>
                        {followers.map(follower => (
                            <li
                                key={follower.id}
                                className="flex items-center justify-between p-2 border-b border-gray-300 dark:border-gray-700"
                            >
                                <div className="flex items-center gap-4">
                                    <Avatar className="w-8 h-8">
                                        <AvatarImage alt={`@${follower.name}`} src={follower.avatar || "/placeholder-user.jpg"} />
                                        <AvatarFallback>{follower.name[0]}</AvatarFallback>
                                    </Avatar>
                                    <span>{follower.name}</span>
                                </div>
                                <Button size="sm" variant="ghost" className='bg-red-500 ml-2 hover:bg-red-700' onClick={() => handleRemoveFollower(follower.id)}>
                                    Quitar
                                </Button>
                            </li>
                        ))}
                    </ul>
                    <Button className="mt-4 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={() => setShowFollowersModal(false)}>
                        Cerrar
                    </Button>
                </div>
            </div>
        )}

        {/* Following Modal */}
        {showFollowingModal && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg">
                    <h2 className="text-xl font-bold mb-4">Siguiendo</h2>
                    <ul>
                        {following.map(user => (
                            <li
                                key={user.id}
                                className="flex items-center justify-between p-2 border-b border-gray-300 dark:border-gray-700"
                            >
                                <div className="flex items-center gap-4">
                                    <Avatar className="w-8 h-8">
                                        <AvatarImage alt={`@${user.name}`} src={user.avatar || "/placeholder-user.jpg"} />
                                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                                    </Avatar>
                                    <span>{user.name}</span>
                                </div>
                                <Button size="sm" variant="ghost" className='bg-red-500 ml-2 hover:bg-red-700' onClick={() => handleUnfollow(user.id)}>
                                    Dejar de seguir
                                </Button>
                            </li>
                        ))}
                    </ul>
                    <Button className="mt-4 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={() => setShowFollowingModal(false)}>
                        Cerrar
                    </Button>
                </div>
            </div>
        )}
        <div className='flex justify-center'>
            <Logout></Logout>
        </div>
    </div>
);