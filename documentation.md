# DOCUMENTATION

## How to run

1. Run the Spring Boot LibraryApplication from IDE
2. Create `.env.local` file inside frontend folder and paste inside `NEXT_PUBLIC_API_ROOT=http://localhost:8080/api/`
3. Run `npm run build` to create a production build
4. Run `npm run start` to start the frontend

## Info

I chose to switch the frontend from `angular` to `NEXTJS` as I had no previous experience working with
angular but did have working with `React`. I wanted to try out nextjs server side components and thought
this project would be perfect for that.

I tried to implement everything from scratch. It came with its ups and downs.
This way I could showcase my skills more but also couldn't finish all the tasks as I ran out of time.
Only external packages I used were `moment` for time manipulation
and `react-icons` for svg icons. For styling I used `tailwind` and implemented all of the designs myself.

I tried to keep my code clean and make components reusable to minimize code repetition.

## Added functionality

- Using backend api endpoint /getBooks, implement table of books view
- Using backend api endpoint /getCheckouts, also implement the checkouts view
- Implement paging and sorting
- Implement individual book and checkout view
- Implement checking out books
- Implement saving / displaying favorite books for current user - using Localstorage
- Implement a user-friendly way to display late checkouts

For me the hardest task was the implementation of paging and sorting as I haven't done this before and it worked
a bit differently than I imagined.
Other than that, everything went pretty smoothly.

All in all the task was interesting and I really learned a lot. 


