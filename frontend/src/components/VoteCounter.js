import React from 'react'
import { Flex, Box } from 'rebass'
import styled, { css } from 'styled-components'
import { FADED, MAIN } from '../utils/colors'
import { TRANSITION_SNAPPY } from '../utils/transitions'
import { FaArrowUp, FaArrowDown } from 'react-icons/lib/fa'

const VoteCounter = ({ voteScore }) => {
	return (
		<Flex align="center" my={3}>
			<Box pr={3}>
				<VoteButton direction="up" />
			</Box>
			<Box pr={3}>
				<VoteScoreNumber>{voteScore}</VoteScoreNumber>
			</Box>
			<Box pr={3}>
				<VoteButton direction="down" />
			</Box>
		</Flex>
	)
}

const VoteScoreNumber = styled.div`
	text-align: center;
	padding-top: 2px;
	font-size: 1.2rem;
	font-weight: 700;
`

const VoteButton = ({ direction }) => {
	return (
		<ArrowButton
			direction={direction}
			onClick={e => {
				e.preventDefault()
			}}
		>
			{direction === 'up' && <FaArrowUp />}
			{direction === 'down' && <FaArrowDown />}
		</ArrowButton>
	)
}

const ArrowButton = styled.button`
	border: none;
	font-size: inherit;
	cursor: pointer;
	padding: 0;
	&:focus {
		outline: 0;
	}
	& svg {
		color: ${FADED};
		transition: ${TRANSITION_SNAPPY};
		&:hover {
			color: ${MAIN};
			${props =>
				props.direction === 'up' &&
				css`
					transform: translateY(-1px);
				`};
			${props =>
				props.direction === 'down' &&
				css`
					transform: translateY(1px);
				`};
		}
	}
`

export default VoteCounter