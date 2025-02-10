import React, { useState } from 'react'
import Member from '../components/Member'
import { historyFamily } from '../API/api'

export default function HistoryInfo() {
    const [members, setMembers] = useState(historyFamily)
    console.log(members);
    const [search, setSearch] = useState("")
    const onChange = (e) => {
        setSearch(e.target.value)
    }

    const searchedMembers = members.filter(
        (memberValue) => {
            return memberValue.userName.toLowerCase().includes(search.toLowerCase())
        }
    )

    return (


        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="flex w-full items-center justify-center flex-column flex-wrap space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900 pt-10">
                <label htmlFor="table-search" className="sr-only"></label>
                <div className="relative">
                    <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input 
                        onChange={onChange} 
                        value={search} type="text" id="table-search" 
                        className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar miembros" />
                </div>
            </div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="px-2 md:px-6 py-3">
                            Check
                        </th>
                        <th className="px-6 py-3">
                            NOMBRE de usuario
                        </th>
                        <th className="px-6 py-3">
                            CEDULA
                        </th>
                        <th className='flex w-[100%]'>
                            <div className="hidden md:flex px-0 py-3 w-[60%]">
                                NOMBRE
                            </div>
                            <div className="hidden md:flex px-6 py-3 w-[40%]">
                                Celular
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {searchedMembers &&
                        searchedMembers.map(membersActive =>
                            <Member
                                membersActive={membersActive}
                                key={membersActive.id}
                            />
                        )

                    }
                </tbody>
            </table>
        </div>

    )
}
