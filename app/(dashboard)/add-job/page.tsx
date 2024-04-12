import React from 'react'

function AddJobPage() {
  return (
    <div>
      {/* <CreateJobForm />  */}
       add job
    </div>
  )
}

export default AddJobPage



// import CreateJobForm from '@/components/CreateJobForm';
// import {
//   dehydrate,
//   HydrationBoundary,
//   QueryClient,
// } from '@tanstack/react-query';
// function AddJobPage() {
//   const queryClient = new QueryClient();
//   return (
//     <HydrationBoundary state={dehydrate(queryClient)}>
//       <CreateJobForm />
//     </HydrationBoundary>
//   );
// }
// export default AddJobPage;