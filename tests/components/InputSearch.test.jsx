import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import InputSearch from "../../src/components/InputSearch";
import { ProductContext } from "../../src/context/ProductContext";

describe('test <InputSearch />', () => {
    const handleSearch = jest.fn();
    
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('debe coincidir con el snapshot', () => {
        const { container } = render(
            <InputSearch handleSearch={ handleSearch } />
        );
        expect(container).toMatchSnapshot();
    })

    test('debe llamar getProducts() al escribir en el input', async () => {
        render(
            <InputSearch handleSearch={ handleSearch } />
        );

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'test' } });
        
        await waitFor(() => {
            expect(handleSearch).toHaveBeenCalledTimes(1);
        });
    })
})
