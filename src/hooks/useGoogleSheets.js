import { useEffect, useState } from "react";

import axios from "axios";

const getSpreadsheetId = (url) => {
  const pattern = /docs.google.com\/spreadsheets\/d\/([a-zA-Z0-9-]*)/;
  const match = url.match(pattern);
  return !match ? url : match[1];
};

const getDataValues = (row) => row.values.map((value) => value.formattedValue);

const convertSheetsToSimpleJson = (rows = []) => {
  const keys = getDataValues(rows[0]);
  return rows
    .filter((_, i) => i > 0)
    .map((row) => {
      const values = getDataValues(row);
      return keys.reduce((acc, key, i) => {
        if (values[i]) {
          return { ...acc, [key]: values[i].trim() };
        }
        return acc;
      }, {});
    })
    .filter((row) => Object.keys(row).length);
};

const useGoogleSheets = (shareUrlOrSheetId, API_KEY) => {
  const [state, setState] = useState({ sheets: null, isFetching: false });

  useEffect(() => {
    const source = axios.CancelToken.source();
    const sheetId = getSpreadsheetId(shareUrlOrSheetId);
    const handleFetch = async () => {
      const endpoint = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}?includeGridData=true&key=${API_KEY}`;

      setState({ sheets: null, isFetching: true });
      try {
        const { data } = await axios.get(endpoint, {
          cancelToken: source.token,
        });

        const sheets = data.sheets?.map((sheet) =>
          convertSheetsToSimpleJson(sheet?.data?.[0]?.rowData)
        );
        setState({ sheets, isFetching: false });
      } catch (error) {
        setState({ sheets: null, isFetching: false, error });
      }
    };
    handleFetch();
    return () => source.cancel("cancelled by useEffect cleaning");
  }, [shareUrlOrSheetId, API_KEY]);
  return state;
};

export default useGoogleSheets;
