import React from "react"
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import "./SearchBar.css"
import { searchBarType } from "../../types/searchBarType.ts"

const SearcBar = ({onChangeText}: searchBarType) => {
    return (
        <div className='SearchBar'>
        <TextField
          variant="outlined"
          placeholder={'Search...'}
          onChange={(event) => onChangeText(event.target.value)}
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