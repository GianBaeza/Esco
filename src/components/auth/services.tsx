export interface LoginUserInput {
  usuario: string;
  contraseña: string;
}

export const loginUser = async (
  name: string,
  password: string
): Promise<any> => {
  try {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: name,
        password: password,
        expiresInMins: 60,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.log(errorData);

      throw new Error(errorData.message || "Error al iniciar sesión");
    }

    const data = await response.json();

    return data;
  } catch (error: any) {
    throw error.message;
  }
};
