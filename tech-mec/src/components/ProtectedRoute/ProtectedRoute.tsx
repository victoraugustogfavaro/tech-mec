// components/ProtectedRoute.tsx
import { useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      alert("Você não tem acesso a esta página. Por favor, faça login.");
      router.push("/login"); // Redireciona para a página de login se não houver token
    }
  }, [router]);

  return <>{children}</>; // Renderiza os filhos caso o token esteja presente
};

export default ProtectedRoute;
