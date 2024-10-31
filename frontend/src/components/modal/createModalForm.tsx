import {
  Form as AntForm,
  Button,
  Input,
  InputNumber,
  Modal,
  Select,
} from 'antd';
import React from 'react';
import { useClients } from '../../hooks/useClients';
import { useMarketers } from '../../hooks/useMarketer';
import { entityName } from '../../types/modalType';
import { OperationType } from '../../types/operationTypes';

const { Option } = Select;

interface CreateEntityModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (values: any) => void;
  entityType: entityName;
}

const CreateEntityModal: React.FC<CreateEntityModalProps> = ({
  visible,
  onClose,
  onSubmit,
  entityType,
}) => {
  const { data: marketers } = useMarketers();
  const { data: clients } = useClients();

  const [form] = AntForm.useForm();

  const handleSubmit = (values: any) => {
    onSubmit(values);
    form.resetFields();
  };

  return (
    <Modal
      title={`Crear ${
        entityType.charAt(0).toUpperCase() + entityType.slice(1)
      }`}
      open={visible}
      onCancel={onClose}
      footer={null}
    >
      <AntForm form={form} layout='vertical' onFinish={handleSubmit}>
        {entityType === entityName.operation && (
          <>
            <AntForm.Item
              label='Tipo'
              name='type'
              rules={[{ required: true, message: 'El tipo es obligatorio' }]}
            >
              <Select placeholder='Seleccione un tipo'>
                <Option value={OperationType.COMPRA}>Compra</Option>
                <Option value={OperationType.VENTA}>Venta</Option>
              </Select>
            </AntForm.Item>
            <AntForm.Item
              label='Cantidad'
              name='amount'
              rules={[
                { required: true, message: 'La cantidad es obligatoria' },
                {
                  type: 'number',
                  min: 0.01,
                  message: 'Debe ser un valor positivo',
                },
              ]}
            >
              <InputNumber
                type='number'
                step='0.01'
                placeholder='Introduce la cantidad'
                style={{ width: '100%' }}
              />
            </AntForm.Item>
            <AntForm.Item
              label='Precio'
              name='price'
              rules={[
                { required: true, message: 'El precio es obligatorio' },
                {
                  type: 'number',
                  min: 0.01,
                  message: 'Debe ser un valor positivo',
                },
              ]}
            >
              <InputNumber
                type='number'
                step='0.01'
                placeholder='Introduce el precio'
                style={{ width: '100%' }}
              />
            </AntForm.Item>
            <AntForm.Item
              label='Comercializadora'
              name='marketer'
              rules={[
                {
                  required: true,
                  message: 'La comercializadora es obligatoria',
                },
              ]}
            >
              <Select placeholder='Seleccione una comercializadora'>
                {marketers?.map((marketer) => (
                  <Option key={marketer.id} value={marketer.id}>
                    {marketer.name}
                  </Option>
                ))}
              </Select>
            </AntForm.Item>
            <AntForm.Item
              label='Cliente'
              name='client'
              rules={[{ required: true, message: 'El cliente es obligatorio' }]}
            >
              <Select placeholder='Seleccione un cliente'>
                {clients?.map((client) => (
                  <Option key={client.id} value={client.id}>
                    {client.name}
                  </Option>
                ))}
              </Select>
            </AntForm.Item>
          </>
        )}

        {entityType === entityName.client && (
          <>
            <AntForm.Item
              label='Nombre'
              name='name'
              rules={[{ required: true, message: 'El nombre es obligatorio' }]}
            >
              <Input placeholder='Introduce el nombre' />
            </AntForm.Item>
            <AntForm.Item
              label='Dirección'
              name='address'
              rules={[
                { required: true, message: 'La dirección es obligatoria' },
              ]}
            >
              <Input placeholder='Introduce la dirección' />
            </AntForm.Item>
            <AntForm.Item
              label='Email'
              name='email'
              rules={[
                { required: true, message: 'El email es obligatorio' },
                { type: 'email', message: 'Introduce un email válido' },
              ]}
            >
              <Input placeholder='Introduce el email' />
            </AntForm.Item>
            <AntForm.Item
              label='Teléfono'
              name='phone'
              rules={[
                { required: true, message: 'El teléfono es obligatorio' },
                {
                  pattern: /^(\+?[0-9]{1,3}\s?)?[0-9]{6,12}$/,
                  message: 'Introduce un teléfono válido',
                },
              ]}
            >
              <Input placeholder='Introduce el teléfono' />
            </AntForm.Item>
            <AntForm.Item
              label='Página Web (Opcional)'
              name='website'
              rules={[{ type: 'url', message: 'Introduce una URL válida' }]}
            >
              <Input placeholder='Introduce la página web' />
            </AntForm.Item>
            <AntForm.Item label='Descripción (Opcional)' name='description'>
              <Input.TextArea placeholder='Introduce una descripción' />
            </AntForm.Item>
          </>
        )}

        {entityType === entityName.marketer && (
          <>
            <AntForm.Item
              label='Nombre'
              name='name'
              rules={[{ required: true, message: 'El nombre es obligatorio' }]}
            >
              <Input placeholder='Introduce el nombre' />
            </AntForm.Item>
            <AntForm.Item
              label='Dirección'
              name='address'
              rules={[
                { required: true, message: 'La dirección es obligatoria' },
              ]}
            >
              <Input placeholder='Introduce la dirección' />
            </AntForm.Item>
            <AntForm.Item
              label='Email'
              name='email'
              rules={[
                { required: true, message: 'El email es obligatorio' },
                { type: 'email', message: 'Introduce un email válido' },
              ]}
            >
              <Input placeholder='Introduce el email' />
            </AntForm.Item>
            <AntForm.Item
              label='Teléfono'
              name='phone'
              rules={[
                { required: true, message: 'El teléfono es obligatorio' },
                {
                  pattern: /^(\+?[0-9]{1,3}\s?)?[0-9]{6,12}$/,
                  message: 'Introduce un teléfono válido',
                },
              ]}
            >
              <Input placeholder='Introduce el teléfono' />
            </AntForm.Item>
            <AntForm.Item
              label='Página Web (Opcional)'
              name='website'
              rules={[{ type: 'url', message: 'Introduce una URL válida' }]}
            >
              <Input placeholder='Introduce la página web' />
            </AntForm.Item>
            <AntForm.Item
              label='Logo URL (Opcional)'
              name='logo_url'
              rules={[{ type: 'url', message: 'Introduce una URL válida' }]}
            >
              <Input placeholder='Introduce la URL del logo' />
            </AntForm.Item>
            <AntForm.Item label='Descripción (Opcional)' name='description'>
              <Input.TextArea placeholder='Introduce una descripción' />
            </AntForm.Item>
          </>
        )}

        <AntForm.Item className='form-item-buttons'>
          <Button onClick={onClose} className='button-spacing'>
            Cancelar
          </Button>
          <Button type='primary' htmlType='submit'>
            Crear
          </Button>
        </AntForm.Item>
      </AntForm>
    </Modal>
  );
};

export default CreateEntityModal;
