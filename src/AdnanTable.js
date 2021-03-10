
const AdnanTable = ({results, onClick, selected}) => {
    
    let rows = results.map(row => 
        <tr className={`hover:bg-blue-400 ${(selected === row.address) && 'bg-blue-200'}`}
            onClick={() => onClick(row.address)}>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {row.address}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {row.balance}
                  </td>
                </tr>
    )
    return <div class="flex flex-col">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium bg-gray-200 uppercase tracking-wider">
                Address
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium bg-gray-200 uppercase tracking-wider">
                Balance
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
                {rows}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
}

export default AdnanTable;