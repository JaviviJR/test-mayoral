import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { ProductContext } from "../../src/context/ProductContext";
import Order from "../../src/components/Order";

describe('test <InputSearch />', () => {
    const orderProducts = jest.fn();
    
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('debe coincidir con el snapshot', () => {
        const { container } = render(
            <ProductContext.Provider value={{
                orderProducts
            }}>
                <Order />
            </ProductContext.Provider>
        );
        expect(container).toMatchSnapshot();
    })

    test('debe llamar orderProducts("ASC") al hacer click en "+"', () => {
        render(
            <ProductContext.Provider value={{
                orderProducts
            }}>
                <Order />
            </ProductContext.Provider>
        );

        const input = screen.getByText('+');
        fireEvent.click(input);
        expect(orderProducts).toHaveBeenCalledTimes(1);
        expect(orderProducts).toHaveBeenCalledWith('ASC');
    })

    test('debe llamar orderProducts("DESC") al hacer click en "-"', () => {
        render(
            <ProductContext.Provider value={{
                orderProducts
            }}>
                <Order />
            </ProductContext.Provider>
        );

        const input = screen.getByText('-');
        fireEvent.click(input);
        expect(orderProducts).toHaveBeenCalledTimes(1);
        expect(orderProducts).toHaveBeenCalledWith('DESC');
    })
})