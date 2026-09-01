import { AuthLayout } from '../_components/auth-layout'
import Image from 'next/image'
import ArrowIcon from '../../../assets/arrow-icon.png'
import { inputClass } from '../_styles/input'

export default function SignUpPage() {
    return (
        <AuthLayout
            title="Criar conta"
            description="Preencha os dados para começar"
            footerText="Já tem uma conta"
            footerLinkText="Entrar"
            footerHref="/sign-in"
        >
            <form className="space-y-6">
                <label className="block text-sm text-zinc-300 mb-2">Nome</label>
                <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full p-4 border rounded-2xl border-zinc-800 outline-none placeholder:text-slate-600"
                ></input>

                <label className="block text-sm text-zinc-300 mb-2">
                    E-mail
                </label>
                <input
                    type="email"
                    placeholder="seu@email.com"
                    className={inputClass}
                ></input>

                <label className="block text-sm text-zinc-300 mb-2">
                    Senha (min. 8 caracteres)
                </label>
                <input
                    type="password"
                    placeholder="••••••••"
                    className={inputClass}
                ></input>

                <button
                    type="submit"
                    className="w-full bg-[#9333ea] flex items-center justify-center gap-2 font-semibold rounded-2xl py-4 cursor-pointer "
                >
                    <span>Criar Conta</span>
                    <Image src={ArrowIcon} alt="botão de criar conta" />
                </button>
            </form>
        </AuthLayout>
    )
}
