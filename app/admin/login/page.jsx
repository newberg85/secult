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
      if (!db) {
        throw new Error("Banco de dados não inicializado. Verifique a configuração do Firebase.");
      }

      const usersCol = collection(db, "users");
      const q = query(usersCol, where("email", "==", enteredEmail));
      const snapshot = await getDocs(q);

      if (snapshot.empty) throw new Error("Credenciais inválidas.");

      const userDoc = snapshot.docs[0];
      const userData = userDoc.data();

      if (userData.senha !== enteredSenha) throw new Error("Credenciais inválidas.");
      if (userData.tipo !== "admin") throw new Error("Acesso negado. Você não é admin.");

      localStorage.setItem(
        "user",
        JSON.stringify({ id: userDoc.id, email: userData.email, tipo: userData.tipo })
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
    <div className="relative min-h-screen flex items-center justify-center p-6 font-[Montserrat] overflow-hidden">
      {/* Fundo gradiente + blur */}
      <div className="absolute inset-0 bg-gradient-to-br from-white-300 via-gray-500 to-gray-800"></div>
      <div className="absolute inset-0 backdrop-blur-3xl bg-white/10"></div>

      {/* Container principal de vidro */}
      <div className="relative w-full max-w-sm bg-white/20 backdrop-blur-2xl border border-white/30 shadow-2xl rounded-2xl p-8">
        <header className="text-center mb-8">
          <img
            src="/secult.png"
            alt="SECULT Logo"
            className="w-40 h-auto mx-auto mb-4 rounded-lg drop-shadow-lg"
            loading="lazy"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://placehold.co/160x60/10B981/ffffff?text=SECULT";
            }}
          />
          <h1 className="text-2xl font-bold text-gray-900 drop-shadow">
            Painel de Administração
          </h1>
          <p className="text-sm text-gray-700 mt-1">
            Acesso exclusivo para administradores
          </p>
        </header>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="space-y-1">
            <label htmlFor="email" className="block text-sm font-medium text-gray-800">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3 py-2 bg-white/30 border border-white/40 rounded-md 
                           focus:ring-2 focus:ring-green-600 focus:outline-none placeholder-gray-500 
                           text-gray-900 text-sm shadow-inner"
                placeholder="seuemail@exemplo.com"
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label htmlFor="password" className="block text-sm font-medium text-gray-800">
              Senha
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                id="password"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full pl-10 pr-3 py-2 bg-white/30 border border-white/40 rounded-md 
                           focus:ring-2 focus:ring-green-600 focus:outline-none placeholder-gray-500 
                           text-gray-900 text-sm shadow-inner"
                placeholder="Digite sua senha"
                required
              />
            </div>
          </div>

          {error && (
            <p className="text-red-600 text-sm text-center p-2 bg-red-100/60 border border-red-200 rounded-md">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-green-700 to-green-900 
                       hover:from-green-600 hover:to-green-800 transition-all duration-300 shadow-lg 
                       flex items-center justify-center"
            disabled={loading}
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
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0
                       c0 3.042 1.135 5.824 3 7.938l3-2.647z"
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
