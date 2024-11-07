import { render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe('Greeting component',()=>{
    test('renders Hello World as a text',()=>{
        //Arrange
        render(<Greeting/>);
        //Act
        //... nothing
        //Assert
        const helloWorldElement = screen.getByText('Hello World',{exact:false});
        expect(helloWorldElement).toBeInTheDocument();
    })

    test('renders "not changed" if the button has not been clicked',()=>{
        render(<Greeting/>);
        const text = screen.getByText(`It's good to see you`,{exact:false});
        expect(text).toBeInTheDocument();
    })

    test('renders "changed" if the button has been clicked',()=>{
        //Arrange
        render(<Greeting/>);
        //Act
        userEvent.click(screen.getByRole('button'));
        //Assert
        const text = screen.getByText('Changed',{exact:false});
        expect(text).toBeInTheDocument();
    })

    test('does not render "not changed" if the button has been clicked',()=>{
        //Arrange
        render(<Greeting/>);
        //Act
        userEvent.click(screen.getByRole('button'));
        //Assert
        //queryByText returns null if the element is not found
        //getByText throws an error if the element is not found
        const text = screen.queryByText(`It's good to see you`,{exact:false});
        expect(text).toBeNull();
    })
})
