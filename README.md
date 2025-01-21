<div align="center">

# UploadThing File Upload Demo 📤

A modern file upload application built with Next.js and UploadThing, featuring a clean UI and seamless file management.

[![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Shadcn/ui](https://img.shields.io/badge/Shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
[![Zod](https://img.shields.io/badge/Zod-0056A1?style=for-the-badge&logo=zod&logoColor=white)](https://zod.dev/)
[![UploadThing](https://img.shields.io/badge/UploadThing-FF0000?style=for-the-badge&logo=upload&logoColor=white)](https://uploadthing.com/)
[![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Postgres](https://img.shields.io/badge/Postgres-336791?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

</div>

## ✨ Features

<div align="center">

| Feature                 | Description                                   |
| ----------------------- | --------------------------------------------- |
| 🎨 **Modern UI**        | Beautiful interface with Shadcn/ui components |
| 📤 **Drag & Drop**      | Easy drag and drop file uploads               |
| 🖼️ **Image Preview**    | Built-in image preview and management         |
| 📱 **Responsive**       | Fully responsive design for all devices       |
| ⚡ **Fast Upload**      | Quick uploads powered by UploadThing          |
| 🔒 **Secure Handling**  | Secure and reliable file handling             |
| 🗄️ **Database Storage** | Efficient storage with Prisma                 |

</div>

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/uploads-uploadthing.git

# Navigate to the project
cd uploads-uploadthing

# Install dependencies
npm install

# Set up environment variables
cp .env

# Set up the database
npx prisma generate
npx prisma db push

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application

## 🛠️ Tech Stack

<details>
<summary>Click to expand tech stack details</summary>

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **File Upload**: [UploadThing](https://uploadthing.com/)
- **Database**: [Neon](https://neon.tech/)
- **Database ORM**: [Prisma](https://www.prisma.io/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Type Safe Server Actions**: [Next Safe Action](https://next-safe-action.dev/)
- **Validation**: [Zod](https://zod.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Toast Notifications**: [Sonner](https://sonner.emilkowal.ski/)

</details>

## 📸 Screenshots

<div align="center">

### Upload Form

![Upload Form](/public/upload-form.png)

### Upload Form Completed

![Upload Form Completed](/public/upload-form-completed.png)

</div>

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
UPLOADTHING_TOKEN=
DATABASE_URL=""
```
