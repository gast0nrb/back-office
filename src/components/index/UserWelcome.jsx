const UserWelcome = ({username = "Username"}) => {
	return (
		<h2 className="text-center md:text-lg xs:text-sm">Bienvenido {username}</h2>
	)
}

export default UserWelcome;
