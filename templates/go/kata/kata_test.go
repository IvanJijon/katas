package kata

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func Test_AlwaysReturnTrue_shouldAlwaysReturnTrue(t *testing.T) {
	assert.Equal(t, true, AlwaysReturnTrue())
}
