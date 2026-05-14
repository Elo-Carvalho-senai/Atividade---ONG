# 🌱 ONG Connect

Aplicativo mobile desenvolvido em **React Native** com **Expo Router** para conectar voluntários a ONGs e projetos sociais.

O projeto foi criado com foco em:

- acessibilidade
- experiência do usuário
- navegação intuitiva
- interface moderna
- organização em componentes reutilizáveis

---

# 📱 Funcionalidades

## 🔐 Sistema de Login

- Validação de nome, e-mail e senha
- Navegação entre telas utilizando Expo Router
- Envio de parâmetros entre rotas

---

## 📊 Dashboard

- Resumo das atividades do voluntário
- Cards informativos
- Próximas ações e projetos
- Interface moderna com gradientes e ícones

---

## 🔎 Explorar ONGs

- Simulação de carregamento de API com `useEffect`
- Indicador de carregamento (`ActivityIndicator`)
- Lista dinâmica com `FlatList`
- Cards personalizados de ONGs
- Modal com descrição detalhada ao clicar

---

## 👤 Perfil do Voluntário

- Exibição do nome recebido do login
- Interesses do usuário
- Botão de edição com `Alert`
- Design responsivo e moderno

---

# 🚀 Tecnologias Utilizadas

- React Native
- Expo
- Expo Router
- TypeScript
- React Hooks
- FlatList
- Modal
- Alert
- Expo Vector Icons
- Expo Linear Gradient

---

# 📂 Estrutura do Projeto

```bash
app/
│
├── index.tsx                # Login
│
├── (tabs)/
│   ├── _layout.tsx          # Navegação por abas
│   ├── index.tsx            # Dashboard
│   ├── explore.tsx          # Lista de ONGs
│   └── perfil.tsx           # Perfil do usuário
│
components/
│   └── ONGCard.tsx
│
assets/
│   └── images/
```

---

# 🧠 Conceitos Aplicados

## ✅ SPA (Single Page Application)

Navegação fluida sem recarregamento de páginas.

## ✅ Navegação Mobile

Uso de Tab Navigation com Expo Router.

## ✅ Componentização

Separação de responsabilidades em componentes reutilizáveis.

## ✅ Ciclo de Vida

Uso de `useEffect` para simulação de carregamento de dados.

## ✅ UX/UI Mobile

- Alto contraste
- Bordas arredondadas
- Sombras suaves
- Ícones intuitivos
- Layout responsivo

---

# 🎨 Identidade Visual

| Elemento | Cor |
|---|---|
| Azul principal | `#1e88e5` |
| Verde destaque | `#34a853` |
| Fundo | `#f4f7fb` |
| Texto escuro | `#1f2937` |

---

# ▶️ Como Executar

## Instalar dependências

```bash
npm install
```

---

## Rodar o projeto

```bash
npx expo start
```

---

# 👥 Equipe

Projeto desenvolvido para o desafio acadêmico **ONG Connect**.

---

# 📌 Objetivo

Facilitar a conexão entre voluntários e organizações sociais através de uma experiência mobile intuitiva, acessível e moderna.
