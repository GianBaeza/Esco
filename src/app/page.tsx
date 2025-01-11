import FormLogin from "@/components/auth/FormLogin";
export default function App() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full [background:radial-gradient(115%_125%_at_50%_10%,#3D3D3D_45%,#63e_100%)] flex items-center justify-center">
      <FormLogin />
    </div>
  );
}
