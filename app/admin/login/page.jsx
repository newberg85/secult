"use client";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import { Lock, Mail } from "lucide-react";
import { db } from "@/lib/firebase";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const enteredEmail = email.trim();
    const enteredSenha = senha.trim();

    try {
      // Verificação de inicialização do Firestore
      if (!db) {
        throw new Error(
          "Banco de dados não inicializado. Verifique a configuração do Firebase."
        );
      }

      const usersCol = collection(db, "users");
      const q = query(usersCol, where("email", "==", enteredEmail));

      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        throw new Error("Credenciais inválidas.");
      }

      const userDoc = snapshot.docs[0];
      const userData = userDoc.data();

      // Validação de Senha
      if (userData.senha !== enteredSenha) {
        throw new Error("Credenciais inválidas.");
      }

      // Validação de Tipo de Usuário (Admin)
      if (userData.tipo !== "admin") {
        throw new Error("Acesso negado. Você não é admin.");
      }

      console.log("Login bem-sucedido:", userData);

      // Salva no localStorage ou sessionStorage
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: userDoc.id,
          email: userData.email,
          tipo: userData.tipo,
        })
      );

      router.push("/admin/dashboard");
    } catch (err) {
      const errorMessage = err.message || "Ocorreu um erro desconhecido.";
      console.error("Erro de Login:", err);
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 sm:p-6 font-[Montserrat]">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-6 sm:p-8">
        <header className="text-center mb-6">
          <img
            src="/secult.png"
            alt="SECULT Logo"
            className="w-40 h-auto mx-auto mb-3 rounded-lg"
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/160x60/10B981/ffffff?text=SECULT";
            }}
          />
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 font-[Montserrat]">
            Painel de Administração
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Acesso exclusivo para administradores
          </p>
        </header>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={16}
                aria-hidden="true"
              />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-green-500 focus:border-green-500 outline-none transition-colors text-gray-800 placeholder-gray-400 text-sm"
                placeholder="seuemail@exemplo.com"
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Senha
            </label>
            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={16}
                aria-hidden="true"
              />
              <input
                id="password"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-green-500 focus:border-green-500 outline-none transition-colors text-gray-800 placeholder-gray-400 text-sm"
                placeholder="Digite sua senha"
                required
              />
            </div>
          </div>

          {error && (
            <p
              id="form-error"
              className="text-red-500 text-xs text-center p-2 bg-red-50 rounded-md"
              role="alert"
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md font-medium text-sm hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-1 transition-all disabled:bg-green-400 disabled:cursor-not-allowed flex items-center justify-center"
            disabled={loading}
            aria-busy={loading}
            aria-label={loading ? "Carregando..." : "Entrar"}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Carregando...
              </>
            ) : (
              "Entrar"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
