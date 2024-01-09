const registerRoutes = (requireContext) => {
    return Object.keys(requireContext).reduce((routes, filename) => {
        routes = routes.concat(requireContext[filename].default);

        return routes;
    }, []);
};

const register = () => {
    /** Load route data from all route files inside domains */
    return registerRoutes(
        import.meta.glob("./../../app/**/routers/*.js", { eager: true })
    );
};

export default register;
