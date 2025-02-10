import React from 'react'

export default function Member({ membersActive }) {
    const { name, img, phone, email, mrn, userName, id } = membersActive
    return (
        <>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className=" w-4 p-4">
                    <div className="flex items-center ">
                        <input id={id} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor={id} className="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" className="flex items-center px-4 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-10 h-10 rounded-full" src={img} alt={name} />
                    <div className="ps-3">
                        <div className="text-base font-semibold">{userName}</div>
                        <div className="font-normal text-gray-500 text-[10px] md:text-[1rem]">{email} </div>
                    </div>
                </th>
                <td className="px-2 md:px-6 py-4 text-[11px] md:text-[1rem]">
                    {mrn}
                </td>
                <td className='flex justify-around  md:text-[1rem]'>
                    <div className="hidden md:flex px-2 md:px-6 md:pb-6">
                        {name}
                    </div>
                    <div className="hidden md:flex px-6 ">
                        {phone}
                    </div>
                </td>
            </tr>
        </>
    )
}
