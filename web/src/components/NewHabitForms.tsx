import { Check } from "phosphor-react";
import * as Checkbox from '@radix-ui/react-checkbox'
import { FormEvent, useState } from "react";
import { api } from "../lib/axios";

const availableWeekDays = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado']

export function NewHabitForm(){
    
    const [title, setTitle] = useState('')
    const [weekDays, setWeekDays] = useState<number[]>([])

    async function createNewHabit(event:FormEvent){
        event.preventDefault()
        
        if(!title || weekDays.length == 0){
            return
        }

        await api.post('habits', {
            title,
            weekDays
        })
        setTitle('')
        setWeekDays([])
        alert("habito criado")
    }

    function handleToggleWeekDay(weekDay:number){
        if(weekDays.includes(weekDay)){
            const weekDaysWhithRemovedOne = weekDays.filter(day => day != weekDay)
            setWeekDays(weekDaysWhithRemovedOne)
        }else{
            const weekDaysWhithAddedOne = [...weekDays,weekDay]
            setWeekDays(weekDaysWhithAddedOne)
        }
    }

    return(
    <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6">
        <label htmlFor="title" className="font-semibold leading-tight">
            Nome do hábito
        </label>
        <input 
        type="text" 
        id="title"
        placeholder="ex.: Exercícios, estudar, ler..." 
        autoFocus
        value={title}
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
        onChange={event => setTitle(event.target.value)}
        />
        
        <label htmlFor="" className="font-semibold leading-tight mt-4">
            Qual a recorrência?
        </label>


        <div className="flex flex-col gap-2 mt-3">
            {availableWeekDays.map((weekDay, index) =>{
                return(
                    <Checkbox.Root checked={weekDays.includes(index)} key={weekDay} onCheckedChange={() => handleToggleWeekDay(index)} className='flex items-center gap-3 group'>
                    <div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500 transition-colors'>
                        <Checkbox.Indicator>
                            <Check size={20} className='text-white'/>
                        </Checkbox.Indicator>
                    </div>
                    <span className='text-white leading-tigh'>
                        {weekDay}
                    </span>
                </Checkbox.Root>
                )
            })}
            <div className='mt-6 flex flex-col gap-3'>     
            </div>
        </div>

        <button type="submit" className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500">
            <Check size={20} weight="bold"/>
            Confirmar
        </button>

    </form>
    )
}