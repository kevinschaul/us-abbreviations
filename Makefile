src/abbreviations.json: src/abbreviations.csv
	csvjson $< > $@
