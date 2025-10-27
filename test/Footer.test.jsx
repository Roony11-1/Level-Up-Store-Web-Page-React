import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, test, expect } from "vitest";
import { Footer } from "../src/components/Footer/Footer"; // ajusta ruta

describe("Footer", () => {

    test("muestra mensaje de suscripción al presionar Enter y limpia input después", async () => {
    render(
        <MemoryRouter>
        <Footer />
        </MemoryRouter>
    );

    const input = screen.getByPlaceholderText("email@example.com");

    // Escribimos un email
    await userEvent.type(input, "suscriptor@correo.com");

    // Presionamos Enter
    await userEvent.keyboard("{Enter}");

    // El mensaje aparece
    expect(screen.getByText("¡Te has suscrito!")).toBeInTheDocument();

    // Esperamos 4 segundos (4000 ms) de manera asíncrona
    await new Promise(r => setTimeout(r, 4000));

    // El mensaje desaparece y el input se limpia
    expect(screen.queryByText("¡Te has suscrito!")).not.toBeInTheDocument();
    expect(input).toHaveValue("");
    });

});