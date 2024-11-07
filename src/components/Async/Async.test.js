import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
    test('renders posts if request succeeds', async () => {
        //fn creates a mock function
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async()=>[{
                id:'p1',
                title:'First Post'
            }]
        })
        //Arrange
        render(<Async />);
        //Act
        //... nothing
        //Assert
        // Assert loading state first
        // expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
        //queryByText returns null if the element is not found
        //getByText throws an error if the element is not found
        const listItemElements = await screen.findAllByRole('listitem',{},{timeout:10000});
        expect(listItemElements).not.toHaveLength(0);
    })
});