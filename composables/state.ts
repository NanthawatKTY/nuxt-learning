//Use for cart
export const useCart = () => useState(() => [])

// Use for auth
export const useAuth = () => useState(() => ({
    isAuthenticated: false,    
}))

export const usePageVisitCount = () => useState(() => ({
    count: 0,
}))