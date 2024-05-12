import React from "react"
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import "./SearchBar.css"
import { searchBarType } from "../../types/searchBarType.ts"
import { searchPatient } from '../../controller/FetchData.ts'

const SearcBar = ({ setData }: searchBarType) => {

  const onChangeSearchText = async (input: string) => {
    setData(await searchPatient(input))
  }

  return (
    <div className='SearchBar'>
      <TextField
        variant="outlined"
        placeholder={'Search...'}
        onChange={(event) => onChangeSearchText(event.target.value)}
        InputProps={{
          endAdornment: (
            <IconButton>
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
    </div>
  )
}

export default SearcBar