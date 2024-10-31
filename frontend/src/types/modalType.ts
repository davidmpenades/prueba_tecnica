export interface ModalFormProps {
    visible: boolean;
    onClose: () => void;
    onSubmit: (values: any) => void;
    initialValues: any;
    entityType: entityName;
    isEdit?: boolean;
  }

export enum entityName {
    client = 'cliente',
    marketer = 'comercializadora',
    operation = 'operación',
}