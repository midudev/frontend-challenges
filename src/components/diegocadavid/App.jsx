import React, { useState } from 'react'

import CliTerminal from './CliTerminal'
import WindowTerminal from './WindowTerminal'

import CommandClear from './CommandClear'
import CommandError from './CommandError'
import CommandGenerate from './CommandGenerate'
import CommandHelp from './CommandHelp'
import CommandMusic from './CommandMusic'
import CommandMidu from './CommandMidu'
import CommandDiego from './CommandDiego'

const parseCommand = (commandName = '') => {
	//Obtenemos el comando
	const commandRegex = /^\w+/gi
	const command = (commandName.match(commandRegex) || [null])[0]

	if (!command) {
		return {
			error: true,
			id: Date.now()
		}
	}

	// Obtenemos las opciones
	const optionsRegex = /\-+\w+=\s?"?\w+"?/gi
	const optionsRaw = commandName.match(optionsRegex) || []
	const optionsList = optionsRaw.map((o) => {
		return {
			name: o.match(/\w+/gi)[0],
			value: o.match(/\w+/gi)[1]
		}
	})

	return {
		name: command,
		options: optionsList,
		id: Date.now()
	}
}

const listDocCommads = [
	{
		name: 'help',
		options: [],
		info: 'Muestra todos los comandos',
		Component: CommandHelp
	},
	{
		name: 'midu',
		options: [
			{
				name: 'social',
				info: 'Especifica la red social (youtube, twitch, instagram, patreon, twitter, facebook)',
				type: 'string'
			}
		],
		info: 'Nos muestra informacion sobre midu',
		Component: CommandMidu
	},
	{
		name: 'diego',
		options: [],
		info: 'Mensaje del desarrollador ;)',
		Component: CommandDiego
	},
	{
		name: 'music',
		options: [],
		info: 'Genera un link de una cancion sorprendente',
		Component: CommandMusic
	},
	{
		name: 'clear',
		options: [],
		info: 'Limpia la consola',
		Component: CommandClear
	},
	{
		name: 'generate',
		options: [
			{ name: 'size', info: 'Especifica la longitud de la contraseña', type: 'number' },
			{
				name: 'symbols',
				info: 'Especifica si la contraseña puede contener simbolos',
				type: 'bool'
			},
			{ name: 'numbers', info: 'Especifica si la contraseña puede contener numeros', type: 'bool' },
			{
				name: 'case',
				info: 'Especifica el tipo de caracteres (mixed, upper, lower)',
				type: 'string'
			}
		],
		info: 'Genera una contraseña',
		Component: CommandGenerate
	}
]

const App = () => {
	const [commands, setCommands] = useState([])

	const addComponentCommand = (command, Component) => {
		return (
			<div key={command.id}>
				<p> {`C:\\Users\\admin> ${command.raw}`} </p>
				{Component}
			</div>
		)
	}

	const addCommand = (commandName) => {
		// Le damos formato al comando
		const command = parseCommand(commandName)

		// Validamos si introdujo un comando
		if (command?.error) {
			setCommands([
				...commands,
				addComponentCommand(
					{ name: commandName, raw: commandName, id: command.id },
					<CommandError />
				)
			])
			console.log('Comando invalido')
			return
		}

		// Obtenemos la informacion de ese comando
		const DocCommand = listDocCommads[listDocCommads.map((c) => c.name).indexOf(command.name)]

		// Vemos si el comando esta registrado
		if (!DocCommand) {
			setCommands([
				...commands,
				addComponentCommand(
					{ raw: commandName, ...command },
					<CommandError command={command.name} />
				)
			])
			console.log('El comando no existe')
			return
		}

		// Si el comando no tiene opciones lo enviamos
		if (!command.options.length > 0) {
			const ComponentCommand = DocCommand.Component
			setCommands([
				...commands,
				addComponentCommand(
					{ raw: commandName, ...command },
					<ComponentCommand
						key={command.id}
						handleReset={() => {
							setCommands([])
						}}
						docs={listDocCommads}
					/>
				)
			])

			return
		}

		// Leemos las opciones del comando
		const optionsValidate = []

		// Validamos la existencia de todos los comandos
		command.options.forEach((option) => {
			const optionExist = DocCommand.options.map((o) => o.name).includes(option.name)
			if (!optionExist) {
				optionsValidate.push(option.name)
			}
		})

		// Validamos el tipo de comando
		command.options.forEach((option) => {
			const DocOption =
				DocCommand.options[DocCommand.options.map((o) => o.name).indexOf(option.name)]

			// En caso de que no exista el comando introducido
			if (!DocOption) {
				return
			}

			// En caso de que sea un numero
			if (DocOption.type == 'number') {
				if (!Number(option.value)) {
					optionsValidate.push(option.name)
				}
			}

			// En caso de que sea un bool
			if (DocOption.type == 'bool') {
				if (!(option.value == 'true' || option.value == 'false')) {
					optionsValidate.push(option.name)
				}
			}
		})

		// Si existen errores le notificamos al usuario
		if (optionsValidate.length > 0) {
			setCommands([
				...commands,
				addComponentCommand(
					{ raw: commandName, ...command },
					<CommandError option={optionsValidate} />
				)
			])
			console.log('Parametros invalidos')

			return
		}

		// Enviamos el comando en caso de que no haya ningun error
		const ComponentCommand = DocCommand.Component
		setCommands([
			...commands,
			addComponentCommand(
				{ raw: commandName, ...command },
				<ComponentCommand
					key={command.id}
					handleReset={() => {
						setCommands([])
					}}
					docs={listDocCommads}
					config={command.options}
				/>
			)
		])
	}

	return (
		<div className='p-2  md:p-8 lg:p-12 bg-[#3F3F46] h-screen font-sans relative'>
			<WindowTerminal addCommand={addCommand} commands={commands} />
			<CliTerminal addCommand={addCommand} />
		</div>
	)
}

export default App
