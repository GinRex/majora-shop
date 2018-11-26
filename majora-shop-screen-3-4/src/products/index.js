import React from 'react';
import {
    translate,
    Create,
    Datagrid,
    DateField,
    Edit,
    EditButton,
    Filter,
    FormTab,
    List,
    NumberInput,
    NumberField,
    ReferenceInput,
    ReferenceManyField,
    SelectInput,
    TabbedForm,
    TextField,
    TextInput,
    DisabledInput,
} from 'admin-on-rest';
import Icon from 'material-ui/svg-icons/av/games';
import Chip from 'material-ui/Chip';
import RichTextInput from 'aor-rich-text-input';
import ThumbnailField from './ThumbnailField';
import CustomerReferenceField from '../visitors/CustomerReferenceField';
import StarRatingField from '../reviews/StarRatingField';
import GridList from './GridList';
import Game from './Game';

export const ProductIcon = Icon;

const QuickFilter = translate(({ label, translate }) => <Chip>{translate(label)}</Chip>);

export const ProductFilter = props => (
    <Filter {...props}>
        <TextInput label="pos.search" source="q" alwaysOn />
        <ReferenceInput source="category_id" reference="categories">
            <SelectInput source="name" />
        </ReferenceInput>
        <NumberInput source="width_gte" />
        <NumberInput source="width_lte" />
        <NumberInput source="height_gte" />
        <NumberInput source="height_lte" />
        <QuickFilter label="resources.products.fields.stock_lte" source="stock_lte" defaultValue={10} />
    </Filter>
);

export const ProductList = (props) => (
    <List {...props} filters={<ProductFilter />} sort={{ field: 'stock', order: 'ASC' }} perPage={20}>
        <Datagrid bodyOptions={{ stripedRows: true, showRowHover: true }}>
            <NumberField label="No." source="id"/>
            <ThumbnailField/>
            <TextField label="Title" source="reference"/>
            <TextField label="Producer" source="width"/>
            <TextField label="Released Year" source="height"/>
            <NumberField source="price" options={{ style: 'currency', currency: 'USD' }} />
            <NumberField source="stock" label="Stock"/>
            <EditButton />
        </Datagrid>
    </List>
);

export const ProductCreate = (props) => (
    <Create {...props}>
        <TabbedForm>
            <FormTab label="resources.products.tabs.image">
                <TextInput source="image" options={{ fullWidth: true }} validation={{ required: true }} />
                <TextInput source="thumbnail" options={{ fullWidth: true }} validation={{ required: true }} />
            </FormTab>
            <FormTab label="resources.products.tabs.details">
                <TextInput source="reference" validation={{ required: true }} />
                <NumberInput source="price" validation={{ required: true }} elStyle={{ width: '5em' }} />
                <TextInput source="width" validation={{ required: true }} />
                <NumberInput source="height" validation={{ required: false }} elStyle={{ width: '7em' }} />
                <ReferenceInput source="category_id" reference="categories" allowEmpty>
                    <SelectInput source="name" />
                </ReferenceInput>
                <NumberInput source="stock" validation={{ required: true }} elStyle={{ width: '5em' }} />
            </FormTab>
            <FormTab label="resources.products.tabs.description">
                <RichTextInput source="description" addLabel={false}/>
            </FormTab>
        </TabbedForm>
    </Create>
);

const ProductTitle = ({ record }) => <span>Game #{record.reference}</span>;
export const ProductEdit = (props) => (
    <Edit {...props} title={<ProductTitle />}>
        <TabbedForm>
            <FormTab label="resources.products.tabs.image">
                <Game />
                <TextInput source="image" options={{ fullWidth: true }} />
                <TextInput source="thumbnail" options={{ fullWidth: true }} />
            </FormTab>
            <FormTab label="resources.products.tabs.details">
                
                <DisabledInput source="id" elStyle={{ width: '5em' }}/>
                <TextInput source="reference" />
                <NumberInput source="price" elStyle={{ width: '5em' }} />
                <TextInput source="width" />
                <NumberInput source="height" elStyle={{ width: '7em' }} />
                <ReferenceInput source="category_id" reference="categories">
                    <SelectInput source="name" />
                </ReferenceInput>
                <NumberInput source="stock" elStyle={{ width: '5em' }} />
            </FormTab>
            <FormTab label="resources.products.tabs.description">
                <RichTextInput source="description" addLabel={false}/>
            </FormTab>
            <FormTab label="resources.products.tabs.reviews">
                <ReferenceManyField reference="reviews" target="product_id" addLabel={false}>
                    <Datagrid>
                        <DateField source="date" />
                        <CustomerReferenceField />
                        <StarRatingField />
                        <TextField source="comment" style={{ maxWidth: '20em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }} />
                        <TextField source="status" />
                        <EditButton />
                    </Datagrid>
                </ReferenceManyField>
            </FormTab>
        </TabbedForm>
    </Edit>
);
