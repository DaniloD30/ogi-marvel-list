import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CardCharacter from "./index";
import "@testing-library/jest-dom";

describe("CardCharacter", () => {
  it("should render character card with correct data", () => {
    const mockCharacter = {
      id: "1",
      name: "Spider-Man",
      thumbnail: { path: "https://example.com/spiderman", extension: "jpg" },
      events: { items: [{ name: "Event 1" }, { name: "Event 2" }] },
      series: { items: [{ name: "Series 1" }, { name: "Series 2" }] },
    };

    render(<CardCharacter {...mockCharacter} />);

    expect(screen.getByText("Spider-Man")).toBeInTheDocument();

    const image = screen.getByAltText("name");
    expect(image).toHaveAttribute("src", "https://example.com/spiderman.jpg");

    expect(screen.getByText("Series 1")).toBeInTheDocument();
    expect(screen.getByText("Series 2")).toBeInTheDocument();

    expect(screen.getByText("Event 1")).toBeInTheDocument();
    expect(screen.getByText("Event 2")).toBeInTheDocument();
  });

  it('should display "--" when there are no series or events', () => {
    const mockCharacter = {
      id: "1",
      name: "Iron Man",
      thumbnail: { path: "https://example.com/ironman", extension: "jpg" },
      events: { items: [] },
      series: { items: [] },
    };

    render(<CardCharacter {...mockCharacter} />);

    // Verificar se "--" é exibido para séries e eventos sem itens
    expect(screen.getAllByText("--")).toHaveLength(2);
  });
});
