import { render, screen } from "@testing-library/react";
import EmptyState from "./EmptyState";

describe("EmptyState", () => {
  it("shows 'No Pokémon found' message", () => {
    render(<EmptyState />);
    expect(screen.getByText("No Pokémon found")).toBeInTheDocument();
  });

  it("shows suggestion to try different search", () => {
    render(<EmptyState />);
    expect(screen.getByText("Try a different name or clear your search")).toBeInTheDocument();
  });

  it("shows both messages", () => {
    render(<EmptyState />);
    expect(screen.getByText("No Pokémon found")).toBeInTheDocument();
    expect(screen.getByText("Try a different name or clear your search")).toBeInTheDocument();
  });
});