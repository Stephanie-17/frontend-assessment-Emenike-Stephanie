import React from 'react'


 const loading = () => {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto">
        =
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/30">
          <div className="p-6 md:p-8">
           =
            <div className="flex justify-between items-start mb-6">
              <div className="space-y-2">
               =
                <div className="h-8 w-32 bg-gray-200 rounded-lg animate-pulse" />
               =
                <div className="h-5 w-16 bg-gray-200 rounded-md animate-pulse" />
              </div>
             
              <div className="h-8 w-20 bg-gray-200 rounded-full animate-pulse" />
            </div>

           
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-100 rounded-xl p-4">
                <div className="h-4 w-16 bg-gray-200 rounded animate-pulse mb-2" />
                <div className="h-7 w-20 bg-gray-200 rounded-lg animate-pulse" />
              </div>
              <div className="bg-gray-100 rounded-xl p-4">
                <div className="h-4 w-16 bg-gray-200 rounded animate-pulse mb-2" />
                <div className="h-7 w-20 bg-gray-200 rounded-lg animate-pulse" />
              </div>
              <div className="bg-gray-100 rounded-xl p-4">
                <div className="h-4 w-16 bg-gray-200 rounded animate-pulse mb-2" />
                <div className="h-7 w-20 bg-gray-200 rounded-lg animate-pulse" />
              </div>
            </div>


           
            <div className="mb-8">
              <div className="h-6 w-28 bg-gray-200 rounded-lg animate-pulse mb-3" />
              <div className="space-y-2">
               
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <div className="h-5 w-24 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                </div>
               
                <div className="flex items-center justify-between py-2 border-b border-gray-100">
                  <div className="h-5 w-28 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 w-16 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
            </div>

            
            <div>
              <div className="h-6 w-20 bg-gray-200 rounded-lg animate-pulse mb-3" />
              <div className="flex gap-3">
                <div className="h-8 w-24 bg-gray-200 rounded-full animate-pulse" />
                <div className="h-8 w-24 bg-gray-200 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>

      
      
      </div>
    </div>
  );
}
  


export default loading