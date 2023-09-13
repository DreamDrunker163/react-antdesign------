export const selectLayout = (pathName: string) => {
	return pathName.includes("/user") ? "LoginLayout" : "BaseLayout"
}