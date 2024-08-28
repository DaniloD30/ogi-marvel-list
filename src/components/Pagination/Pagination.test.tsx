import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Pagination from "./index";
import "@testing-library/jest-dom";

describe("Pagination", () => {
  it('should display "<<"', () => {
    const mock = {
      page: 1,
      total: 15,
      setPage: vi.fn(),
    };

    render(<Pagination {...mock} />);

    expect(screen.getByText(/<</)).toBeInTheDocument();

    expect(screen.getAllByText(/</)).toHaveLength(2);

    expect(screen.getAllByText(/>/)).toHaveLength(2);

    expect(screen.getByText(/>>/)).toBeInTheDocument();
  });

  it('should not display "<<"', () => {
    const mock = {
      page: 0,
      total: 0,
      setPage: vi.fn(),
    };

    render(<Pagination {...mock} />);

    expect(screen.queryByText(/<</)).toBe(null);

    expect(screen.queryByText(/</)).toBe(null);

    expect(screen.queryByText(/>/)).toBe(null);

    expect(screen.queryByText(/>>/)).toBe(null);
  });

  it("should render with correct atribute", () => {
    const mock = {
      page: 1,
      total: 20,
      setPage: vi.fn(),
    };

    render(<Pagination {...mock} />);

    expect(
      screen.getByRole("button", {
        name: /2/i,
      })
    ).toHaveClass("number-page-active");

    expect(
      screen.getByRole("button", {
        name: /1/i,
      })
    ).toHaveClass("number-page-inactive");
  });

  it("should called setPage", () => {
    const mock = {
      page: 1,
      total: 50,
      setPage: vi.fn(),
    };

    render(<Pagination {...mock} />);

    screen.logTestingPlaygroundURL();

    fireEvent.click(
      screen.getByRole("button", {
        name: /3/i,
      })
    );

    expect(mock.setPage).toHaveBeenCalled();

    fireEvent.click(
      screen.getByRole("button", {
        name: /<</i,
      })
    );

    expect(mock.setPage).toHaveBeenCalled();
  });
});
