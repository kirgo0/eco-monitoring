'use client';
import { RxCrossCircled } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'
import toast from 'react-hot-toast'

const ErrorToast = ({ t, message }: { t: any, message: string }) => {
    return (
        <div className={`flex items-center py-3 px-4 pr-2 gap-4 bg-rose-300 rounded-lg shadow-sm text-black ${t.visible ? ' animate-appearance-in' : ' animate-appearance-out'
            }`}>
            <RxCrossCircled size={25} />
            <div className=' flex flex-col flex-auto w-[200px] md:w-[300px]'>
                <div className=' text-lg font-semibold'>
                    Error
                </div>
                <p className=' text-xs font-medium'>{message}</p>
            </div>
            <button className=' hover:bg-gray-500 hover:bg-opacity-20 hover:rounded-[50%] p-3' onClick={() => toast.remove(t.id)}>
                <AiOutlineClose size={20} />
            </button>

        </div>
    )
}

export default ErrorToast