import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { ProductContext } from "../../src/context/ProductContext";
import Order from "../../src/components/Order";

describe('test <InputSearch />', () => {
    const handleOrder = jest.fn();
    
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('debe coincidir con el snapshot', () => {
        const { container } = render(
            <Order handleOrder={ handleOrder }/>
        );
        expect(container).toMatchSnapshot();
    })

    test('debe llamar orderProducts("ASC") al hacer click en "+"', () => {
        render(
            <Order handleOrder={ handleOrder }/>
        );

        const input = screen.getByText('+');
        fireEvent.click(input);
        expect(handleOrder).toHaveBeenCalledTimes(1);
        expect(handleOrder).toHaveBeenCalledWith('ASC');
    })

    test('debe llamar orderProducts("DESC") al hacer click en "-"', () => {
        render(
            <Order handleOrder={ handleOrder }/>
        );

        const input = screen.getByText('-');
        fireEvent.click(input);
        expect(handleOrder).toHaveBeenCalledTimes(1);
        expect(handleOrder).toHaveBeenCalledWith('DESC');
    })
})