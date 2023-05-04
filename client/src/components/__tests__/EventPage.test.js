// Import {render, screen} from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import {MemoryRouter} from 'react-router-dom';
// import {Context} from '../context/context';
// import EventPage from '../Pages/EventPage';
// import React from 'react';

// // Mock context values
// const mockContextValues = {
//   events: [
//     {
//       _id: '1',
//       title: 'Test Event',
//       coordinates: [1.23, 4.56],
//       description: 'Test description',
//       joined: [],
//     },
//   ],
//   addToJoinedEvents: jest.fn(),
//   removeJoinedEvent: jest.fn(),
//   users: [
//     {
//       _id: '1',
//       name: 'Test User',
//       profilePicture: 'test-picture.png',
//     },
//   ],
//   activeUser: {
//     _id: '1',
//   },
// };

// describe('EventPage', () => {
//   it('renders loading when event is undefined', () => {
//     // Const {queryByText} = render(<EventPage />, {wrapper: MemoryRouter});
//     // Expect(getByText(/loading.../i)).toBeInTheDocument();
//     // render(<EventPage />);
//     render(<EventPage />, {wrapper: MemoryRouter});
//     expect(screen.getByTestId('container2')).toHaveClass('loading-container');
//   });

//   // Test('renders event page with event data', () => {
//   //   render(
//   //     <Context.Provider value={mockContextValues}>
//   //       <MemoryRouter initialEntries={[{pathname: '/events/1', state: {id: '1'}}]}>
//   //         <EventPage />
//   //       </MemoryRouter>
//   //     </Context.Provider>,
//   //   );

//   //   // Wait for loading to finish
//   //   expect(screen.getByText('loading...')).not.toBeInTheDocument();

//   //   // Check event title
//   //   expect(screen.getByText('Test Event')).toBeInTheDocument();

//   //   // Click join button and check that function is called
//   //   const joinButton = screen.getByText('JOIN');
//   //   userEvent.click(joinButton);
//   //   expect(mockContextValues.addToJoinedEvents).toHaveBeenCalledWith('1');

//   //   // Check that the joined button is now displayed
//   //   expect(screen.getByText('JOINED')).toBeInTheDocument();

//   //   // Click joined button and check that function is called
//   //   const joinedButton = screen.getByText('JOINED');
//   //   userEvent.click(joinedButton);
//   //   expect(mockContextValues.removeJoinedEvent).toHaveBeenCalledWith('1');

//   //   // Check that the join button is now displayed
//   //   expect(screen.getByText('JOIN')).toBeInTheDocument();
//   // });
// });
