// Package components provides primitives to interact with the openapi HTTP API.
//
// Code generated by github.com/deepmap/oapi-codegen version v1.8.1 DO NOT EDIT.
package components

import (
	"bytes"
	"compress/gzip"
	"encoding/base64"
	"fmt"
	"net/url"
	"path"
	"strings"

	"github.com/getkin/kin-openapi/openapi3"
)

// VironPager defines model for VironPager.
type VironPager struct {
	CurrentPage int `json:"currentPage"`
	MaxPage     int `json:"maxPage"`
}

// VironEmailQueryParam defines model for VironEmailQueryParam.
type VironEmailQueryParam string

// VironIdPathParam defines model for VironIdPathParam.
type VironIdPathParam string

// VironIdQueryParam defines model for VironIdQueryParam.
type VironIdQueryParam string

// VironPagerPageQueryParam defines model for VironPagerPageQueryParam.
type VironPagerPageQueryParam int

// VironPagerSizeQueryParam defines model for VironPagerSizeQueryParam.
type VironPagerSizeQueryParam int

// VironRoleIdQueryParam defines model for VironRoleIdQueryParam.
type VironRoleIdQueryParam string

// VironSortQueryParam defines model for VironSortQueryParam.
type VironSortQueryParam []string

// Base64 encoded, gzipped, json marshaled Swagger object
var swaggerSpec = []string{

	"H4sIAAAAAAAC/4xTTW8TQQz9KyuLA4jRksJtL3Dh0FugEhcEkrPrTYzmqx5v1bTsf0eeoDSp0iaXldbP",
	"fu/ZYz9Cn0JOkaIW6B4ho2AgJal/P1hS/BqQ/beJZLs00OIcoYNbC4GDiIGgA7I0cFD6DQW0LN1mA4oK",
	"xzXMs9vxXQ9L1M0xV0bdPFHxAA6EbicWGqBTmegi3vMmK/NZpiWuSexzTDhQ6YWzcjJmw5s4hRVJk8bG",
	"c1FwJ0UzrumULEelNckz3Rt+eFXX8DOChR8uE/yePF0yNql5l4zuJom+6j6JNiVTzyP3aMGDXug++zQQ",
	"dCP6Qi/0lkSPjLBS+L+6qiRW8rt9/7l7i6X/a+Lv3oB7btdB4Hi9q7zaoyiCWwOLbr0FxiSh9raTe7qJ",
	"+lJVVFImUaaK9ZMIRTX01NgdBLx/CZwPV/7nPtMdkf7ae02rP9QrzFbHcUyVkrXa/nJnHj94XjUH1+3g",
	"jqTsnmHRLtorM5QyRcwMHXxqF+1HcPUUC3Rx8n7+FwAA///LAn8ZHgQAAA==",
}

// GetSwagger returns the content of the embedded swagger specification file
// or error if failed to decode
func decodeSpec() ([]byte, error) {
	zipped, err := base64.StdEncoding.DecodeString(strings.Join(swaggerSpec, ""))
	if err != nil {
		return nil, fmt.Errorf("error base64 decoding spec: %s", err)
	}
	zr, err := gzip.NewReader(bytes.NewReader(zipped))
	if err != nil {
		return nil, fmt.Errorf("error decompressing spec: %s", err)
	}
	var buf bytes.Buffer
	_, err = buf.ReadFrom(zr)
	if err != nil {
		return nil, fmt.Errorf("error decompressing spec: %s", err)
	}

	return buf.Bytes(), nil
}

var rawSpec = decodeSpecCached()

// a naive cached of a decoded swagger spec
func decodeSpecCached() func() ([]byte, error) {
	data, err := decodeSpec()
	return func() ([]byte, error) {
		return data, err
	}
}

// Constructs a synthetic filesystem for resolving external references when loading openapi specifications.
func PathToRawSpec(pathToFile string) map[string]func() ([]byte, error) {
	var res = make(map[string]func() ([]byte, error))
	if len(pathToFile) > 0 {
		res[pathToFile] = rawSpec
	}

	return res
}

// GetSwagger returns the Swagger specification corresponding to the generated code
// in this file. The external references of Swagger specification are resolved.
// The logic of resolving external references is tightly connected to "import-mapping" feature.
// Externally referenced files must be embedded in the corresponding golang packages.
// Urls can be supported but this task was out of the scope.
func GetSwagger() (swagger *openapi3.T, err error) {
	var resolvePath = PathToRawSpec("")

	loader := openapi3.NewLoader()
	loader.IsExternalRefsAllowed = true
	loader.ReadFromURIFunc = func(loader *openapi3.Loader, url *url.URL) ([]byte, error) {
		var pathToFile = url.String()
		pathToFile = path.Clean(pathToFile)
		getSpec, ok := resolvePath[pathToFile]
		if !ok {
			err1 := fmt.Errorf("path not found: %s", pathToFile)
			return nil, err1
		}
		return getSpec()
	}
	var specData []byte
	specData, err = rawSpec()
	if err != nil {
		return
	}
	swagger, err = loader.LoadFromData(specData)
	if err != nil {
		return
	}
	return
}
