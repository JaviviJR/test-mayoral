import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import InputSearch from "../../src/components/InputSearch";
import { ProductContext } from "../../src/context/ProductContext";

describe('test <InputSearch />', () => {
    const getProducts = jest.fn();
    
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('debe coincidir con el snapshot', () => {
        const { container } = render(
            <ProductContext.Provider value={{
                getProducts: getProducts
            }}>
                <InputSearch />
            </ProductContext.Provider>
        );
        expect(container).toMatchSnapshot();
    })

    test('debe llamar getProducts() al escribir en el input', async () => {
        render(
            <ProductContext.Provider value={{
                getProducts
            }}>
                <InputSearch />
            </ProductContext.Provider>
        );

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'test' } });
        
        await waitFor(() => {
            expect(getProducts).toHaveBeenCalledTimes(1);
        });
    })
})
