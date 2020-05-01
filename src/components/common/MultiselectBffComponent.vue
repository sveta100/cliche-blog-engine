<template>
  <div class="fl-row">
    <div class="multiselect">
      <div>
        <div class="multiselect__selected-options mb-md">
          <span
            v-for="option in selectedOptions"
            :key="option.id"
            class="multiselect__selected-option"
            @change="updateParent"
          >
            {{ option.name }}
            <IconButton
              :icon="'times'"
              :size="'1x'"
              :color="'cc-white'"
              class="multiselect__clear-btn"
              @click="removeFromSelected(option._id)"
            />
          </span>
        </div>
        <div
          v-if="!isNewOption"
          class="mb-md left"
        >
          <label
            class="cursor-pointer "
            @click="showTags = !showTags"
          >Select a tags</label>
          <IconButton
            :icon="showTags ? 'minus': 'plus'"
            @click="showTags = !showTags"
          />
        </div>
        <div
          v-if="isNewOption"
          class="multiselect__newOption-wrapper mb-md"
        >
          <input
            v-model="newOptionName"
            class="multiselect__typeahead"
            autofocus
            type="text"
          >
          <div class="multiselect__new-opt-buttons">
            <IconButton
              :icon="'save'"
              @click="createNewOption()"
            />
            <IconButton
              :icon="'times'"
              @click="isNewOption = !isNewOption"
            />
          </div>
        </div>
        <div
          v-if="showTags"
          class="multiselect__options-wrapper"
        >
          <input
            v-model="keyword"
            class="multiselect__typeahead"
            autofocus
            type="text"
            @keyup.enter="selectFirstOption($event)"
            @input="onKeywordChange($event)"
          >
          <ul
            class="multiselect__options"
          >
            <li
              v-for="option in filtered"
              :key="option.id"
              class="multiselect__option left"
            >
              {{ option.name }}
            </li>
            <li
              v-show="filtered.length == 0"
              class="multiselect__add-new-option"
              @click="newOptionAddingOn()"
            >
              Add new
              <span> <IconButton
                :icon="'plus'"
                :size="'2x'"
              />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconButton from './IconButtonComponent.vue';
import TagService from '../../../services/TagService';

export default {
	name: 'MultiselectBff',
	components: {
		IconButton,
	},
	props: {
		options: {
			type: Array,
			default: () => [],
		},
		preselected: {
			type: Array,
			default: () => [],
		},
	},

	data() {
		return {
			selectedOptions: [],
			filtered: this.options.slice(),
			showTags: false,
			keyword: '',
			isNewOption: false,
			newOptionName: '',
		};
	},
	watch: {
		options(loadedOptions) {
			this.options = loadedOptions;
			this.checkPreselected();
			this.filterSelectedOut();
		},
		preselected(preselected) {
			this.preselected = preselected;
		},
	},
	methods: {
		checkPreselected() {
			// eslint-disable-next-line no-underscore-dangle
			const options = this.options.filter((i) => this.preselected.includes(i._id));
			options.forEach((i) => (!this.selectedOptions.includes(i) ? this.selectedOptions.push(i)
				: this.selectedOptions));
		},
		selectFirstOption() {
			const selectedOpt = this.filtered[0];
			if (selectedOpt !== undefined && this.searchedOption(selectedOpt)
       && !this.selectedOptions.includes(selectedOpt)) {
				this.selectedOptions.push(selectedOpt);
				this.emptyInput();
				this.filterSelectedOut();
				debugger;
				this.updateParent();
			}
		},
		emptyInput() {
			this.keyword = '';
		},
		onKeywordChange(e) {
			if (!e.target.value) { this.filterSelectedOut(); } else {
				this.filtered = this.options.filter((i) => this.searchedOption(i));
			}
		},
		removeFromSelected(id) {
			// eslint-disable-next-line no-underscore-dangle
			this.selectedOptions = this.selectedOptions.filter((i) => i._id !== id);
			this.filterSelectedOut();
			this.updateParent();
		},
		updateParent() {
			this.$emit('update-selected', this.selectedOptions);
		},
		filterSelectedOut() {
			this.filtered = this.options.filter((i) => !this.selectedOptions.includes(i));
		},
		searchedOption(option) {
			return this.keyword !== '' && option.name.toLowerCase().startsWith(this.keyword.toLowerCase());
		},
		newOptionAddingOn() {
			this.isNewOption = true;
			this.showTags = !this.isNewOption;
		},
		async createNewOption() {
			const addedTag = 	await TagService.addOrUpdateTag({ name: this.newOptionName });
			if (addedTag) {
				this.$toasted.show('Created successfully', {
					duration: 5000,
					type: 'success',
				});
			} else {
				this.$toasted.show('Error while saving');
			}

			this.emptyInput();
			this.isNewOption = false;
			this.options.push(addedTag);
			this.selectedOptions.push(addedTag);
			this.filterSelectedOut();
			this.updateParent();
		},
	},

};
</script>
<style lang="scss" scoped>
.multiselect {
  min-width: 40rem;
  min-height: 10rem;
  position: relative;

  &__options-wrapper {
    position: absolute;
    left: 0;
    right: 0;
    top: 80%;
  }

  &__add-new-option {
    cursor: pointer;
  }

  &__typeahead {
    padding: 10px 5px;
    min-width: 400px;
    border-color: darkgray;
    outline: none;
    border-radius: 5px;

    &:focus {
      border-color: $tertiary;
      box-shadow: 0 4px 6px -6px $tertiary;
    }
  }

  &__new-opt-buttons {
    display: flex;
    min-width: 100px;
    justify-content: space-evenly;
  }

  &__options {
    list-style: none;
    z-index: 1;
    background-color: white;
    border: 1px $primary solid;
    border-radius: 5px;
    padding: 10px;
    max-height: 400px;
    overflow-y: auto;
  }

  &__option {
    padding: 5px;
  }

  &__selected-options {
    display: flex;
  }

  &__selected-option {
    background: $tertiary;
    padding: 5px 0 5px 10px;
    color: white;

    &:not(:first-child) {
      margin-left: 5px;
    }
  }

  &__clear-btn {
    padding: 0 8px 0 10px;
  }

  &__newOption-wrapper {
    display: flex;
  }
}
</style>
