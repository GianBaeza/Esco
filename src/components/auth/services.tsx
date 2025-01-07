export interface LoginUserInput {
  usuario: string;
  contraseña: string;
}

export const loginUser = async (user: LoginUserInput): Promise<any> => {
  console.log("Intentando iniciar sesión con:", user);

  try {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user.usuario,
        password: user.contraseña,
        expiresInMins: 60,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error al iniciar sesión");
    }

    const data = await response.json();

    return data;
  } catch (error: any) {
    console.error("Error en loginUser:", error.message);

    throw new Error(
      error.message ||
        "Ocurrió un error desconocido durante el inicio de sesión"
    );
  }
};
